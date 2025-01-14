<script>
	import AuthorPic from '$assets/profile_pic.jpg';
</script>

<div class="author-section landingpage-section">
	<h2 class="mb-l">About the Author</h2>
	<div class="author-container">
		<img src={AuthorPic} alt="Author John Doe" />
		<div class="author-text">
			<p class="mb-xs">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nullam eget felis in sapien
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Nullam eget felis in sapien. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Nullam eget felis in sapien lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nullam eget felis in sapien
			</p>
		</div>
	</div>
</div>

<style>
	.author-container {
		display: flex;
		justify-content: space-between;
	}

	.author-container img {
		width: 40%;
		border: 6px solid black;
		box-shadow: 0 px 24px rgba(0, 0, 0, 0.5);
	}

	.author-text {
		width: 55%;
	}
</style>
