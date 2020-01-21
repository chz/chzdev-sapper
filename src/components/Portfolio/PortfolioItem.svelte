<script>
  export let portfolio;
</script>
<figure class="item lbaudio">
  <div class="portfolio-item-img">
    <img src="{portfolio.cover}" alt={portfolio.title} title={portfolio.title} />
    <a rel=prefetch href="portfolio/{portfolio.slug}"> </a>
  </div>
  <i class="fas fa-globe" />
  <h4 class="name">{portfolio.title}</h4>
  <span class="category">{portfolio.category.toUpperCase()}</span>
</figure>
