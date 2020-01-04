<script>
  import {array_chunk} from '../../utilities/index'
  export let what_i_do_title = ''
  export let what_i_do_services = []
  let servicesChunk = array_chunk(what_i_do_services, 2)
</script>
<div class="row">
  <div class="col-xs-12 col-sm-12">
    <div class="col-inner">
      <div class="block-title">
        <h3>{what_i_do_title}</h3>
      </div>
    </div>
  </div>
{#each servicesChunk as chunk}
  <div class="col-xs-12 col-sm-6">
      <div class="col-inner">
        <div class="info-list-w-icon">
          <!-- Service Item-->
          {#each chunk as service}
            <div class="info-block-w-icon">
                <div class="ci-icon"><i class="{service.class}"></i></div>
                <div class="ci-text">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
          {/each}
        </div>
      </div>
    </div>
{/each}
</div>