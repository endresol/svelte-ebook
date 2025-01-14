<script>
	import { FAQItem, Button } from '$components';
	import twitterIcon from '$assets/icons/twitter.webp';
	import faqs from '$assets/data/faqs.json';

	let selectedQuestion = $state(-1);

	function onclick(number) {
		if (selectedQuestion === number) {
			selectedQuestion = -1;
		} else {
			selectedQuestion = number;
		}
	}
</script>

<section class="faq-section landingpage-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			<FAQItem {faq} isSelected={selectedQuestion === index} onclick={() => onclick(index)} />
		{/each}
	</div>
	<div class="additional-info mt-m">
		<Button class="mt-l">Buy Now</Button>
		<p class="mt-m">Any other questions?</p>
		<a href="https://x.com/endresolem">
			<p>
				Hit me up on
				<img src={twitterIcon} class="twitter-icon" alt="Twitter icon" />
			</p>
		</a>
	</div>
</section>
ß

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: gray;
	}
	.twitter-icon {
		width: 16px;
		height: 16px;
	}
	a {
		text-decoration: underline;
	}
</style>
