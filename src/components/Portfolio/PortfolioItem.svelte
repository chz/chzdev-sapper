<script>
  export let portfolio;
</script>
<figure class="item lbaudio">
  <div class="portfolio-item-img">
    <img src="https://api.chz.dev/api/assets/{portfolio.cover.private_hash}?key=directus-large-crop" alt={portfolio.title} title={portfolio.title} />
    <a rel=prefetch href="portfolio/{portfolio.slug}"> </a>
  </div>
  <i class="fas fa-globe" />
  <h4 class="name">{portfolio.title}</h4>
  <span class="category">{portfolio.category.toUpperCase()}</span>
</figure>