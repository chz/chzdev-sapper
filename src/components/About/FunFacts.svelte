<script>
export let facts_title;
export let facts;
</script>
<div class="row">
  <div class="col-xs-12 col-sm-12">
    <div class="block-title">
      <h3>{facts_title}</h3>
    </div>
    <div class="row">
      {#each facts as fact}
        <div class="col-xs-12 col-sm-3">
          <div class="col-inner bs-30">
            <div class="lm-info-block">
              <i class={fact.class}/>
              <h4>{fact.title}</h4>
              <span class="lm-info-block-value">{fact.value}</span>
              <span class="lm-info-block-text"></span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>