<script>
	export let segment;
</script>

<!-- Navigation -->
<div class="site-nav">
	<!-- Main menu -->
	<ul id="nav" class="site-main-menu">
		<li>
			<a class='{segment === undefined ? "selected" : ""}' href=".">Home</a>
		</li>
		<li>
			<a rel="prefetch" class='{segment === "about" ? "selected" : ""}' href="about">About</a>
		</li>
		<li>
			<a rel="prefetch" class='{segment === "resume" ? "selected" : ""}' href="resume">Resume</a>
		</li>
		<li>
			<a rel="prefetch" class='{segment === "portfolio" ? "selected" : ""}' href="portfolio">Portfolio</a>
		</li>
		<li>
			<a rel="prefetch" class='{segment === "contact" ? "selected" : ""}' href="contact">Contact</a>
		</li>
	</ul>
	<!-- /Main menu -->
</div>
<!-- Navigation -->
