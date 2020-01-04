<script>
  export let skills,cv;
  let design = skills.filter(skill => skill.type === 1)
  let pattern = skills.filter(skill => skill.type === 2)
  let development = skills.filter(skill => skill.type === 0)
</script>
<div class="col-xs-12 col-sm-5">
  <div class="row">
    <div class="col-xs-12 col-lg-6">
      <div class="col-inner">
        <div class="block-title">
          <h3>Development Skills<span></span></h3>
        </div>
        <div class="skills-info skills-second-style">
        {#each development as item}
          <div class="clearfix">
            <h4 class="ts-10">{item.skill}</h4>
          </div>
        {/each}
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-6">
      <div class="col-inner">
        <div class="block-title mt-3 mt-lg-0">
          <h3>Design Skills<span></span></h3>
        </div>
        <div class="skills-info skills-second-style">
        {#each design as item}
          <div class="clearfix">
            <h4 class="ts-10">{item.skill}</h4>
          </div>
        {/each}
        </div>
      </div>
      <div class="col-inner">
        <div class="block-title mt-3">
          <h3>Patterns and Techniques<span></span></h3>
        </div>
        <div class="skills-info skills-second-style">
        {#each pattern as item}
          <div class="clearfix">
            <h4 class="ts-10">{item.skill}</h4>
          </div>
        {/each}
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-6 mt-5">
      <div class="col-inner">
        <div class="block-title mt-3 mt-lg-0">
          <h3>CV<span></span></h3>
        </div>
        <div class="skills-info skills-second-style">
        {#if cv}
          <a class="btn btn-primary" href={cv} download>Download CV</a>
        {/if}
        </div>
      </div>
    </div>
  </div>
</div>