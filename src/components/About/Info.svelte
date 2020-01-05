<script>
  export let me;
  export let content;
</script>
<div class="row bs-30">
  <div class="col-xs-6 col-sm-8 about-content">
    {@html content}
  </div>
  <div class="col-xs-6 col-sm-4">
    <ul class="info-list">
      {#each me as item}
        <li><span class="title">{item.title}</span>
        <span class="value">{item.value}</span></li>
      {/each}
    </ul>
  </div>
</div>
<style>
  :global(.about-content img) {
    float: left;
    width: 207px;
    margin-right: 20px;
  }
</style>
