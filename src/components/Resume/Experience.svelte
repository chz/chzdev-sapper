<script>
  export let experience
</script>
<div class="col-xs-12 col-sm-7">
  <div class="col-inner bs-30">
    <div class="block-title">
      <h3>Experience<span></span></h3>
    </div>
    <div class="timeline timeline-second-style clearfix">
      {#each experience as item}
        <div class="timeline-item clearfix">
          <div class="left-part">
            <h5 class="item-period">{item.date}</h5><span class="item-company">{item.position}</span>
          </div>
          <div class="divider"></div>
          <div class="right-part">
            <h4 class="item-title">{item.company}</h4>
            {#if item.description}
               {@html item.description}
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>