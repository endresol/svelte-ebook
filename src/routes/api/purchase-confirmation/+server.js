import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";

import pdf from "$assets/Ebook.pdf";
import { read } from "$app/server";

import { SENDGRID_PRIVATE_KEY } from "$env/static/private";

// const PDF_GUIDE_URL = "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

sgMail.setApiKey(SENDGRID_PRIVATE_KEY);

export async function POST({ request }) {
	console.log("sending book");
	const requestBody = await request.json();

	const pdfdata = await read(pdf).arrayBuffer();
	const base64Pdf = Buffer.from(pdfdata).toString("base64");

	const customerEmail = requestBody.data.object.customer_details.email;
	const customerName = requestBody.data.object.customer_details.name;
	console.log("customer:", customerEmail, customerName);

	const message = {
		to: customerEmail,
		from: "endre@endresolem.com",
		subject: "Thank you for your purchase of my e-book",
		html: `<h1>Hello ${customerName}, thank you for purchasing my e-book.</h1> 
    <p>I hope you enjoy it!</p>`,
		attachments: [
			{
				content: base64Pdf,
				filename: "Digital Ebook.pdf",
				type: "application/pdf",
				disposition: "attachment"
			}
		]
	};

	console.log("message:", message);
	try {
		const resposne = await sgMail.send(message).catch((err) => {
			console.log("Error:", err);
		});

		console.log("response!!!", resposne);
	} catch (error) {
		console.error("Error::", error.response.body.errors);
	}

	return json({ response: "Email not sent" });
}
