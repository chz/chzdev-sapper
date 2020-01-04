<script context="module">
  import api from '../../api'
  import {shuffle} from '../../utilities/index'
  export async function preload(){
      const res = await api.getItems('portfolio',{
        fields: '*.*,cover'
      })
      return {
        portfolios: shuffle(res.data)
      }
    }
</script>
<script>
  export let portfolios;
  let selectedFilter = '';
  import PortfolioItem from '../../components/Portfolio/PortfolioItem.svelte'
  $: filterPortfolios = selectedFilter ? portfolios.filter(portfolio => portfolio.category === selectedFilter) : portfolios
</script>
<svelte:head>
  <title>Portfolio | CHZ.DEV - Chingiz Mammadov - Front End Engineer</title>
</svelte:head>
<section class="pt-page pt-page-home pt-page-current">
  <div class="section-inner custom-page-content">
    <div class="section-content">
      <div class="section-title-block second-style">
        <h2 class="section-title">Portfolio</h2>
        <h5 class="section-description">My Works</h5>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <!-- Portfolio Content-->
          <div class="portfolio-content">
            <ul class="portfolio-filters">
              <li class="{selectedFilter === '' ? 'active':''}">
                <a href="javascript:void(0)" class="filter btn btn-sm btn-link" on:click="{()=>{selectedFilter = ''}}">All</a>
              </li>
              <li class="{selectedFilter === 'personal' ? 'active':''}">
                <a href="javascript:void(0)" class="filter btn btn-sm btn-link" on:click="{()=>{selectedFilter = 'personal'}}">PERSONAL</a>
              </li>
              <li class="{selectedFilter === 'safaroff' ? 'active':''}">
                <a href="javascript:void(0)" class="filter btn btn-sm btn-link" on:click="{()=>{selectedFilter = 'safaroff'}}">SAFAROFF</a>
              </li>
            </ul>
            <!-- Portfolio Grid-->
            <div class="portfolio-grid three-columns">
              {#each filterPortfolios as portfolio}
                <PortfolioItem {portfolio}/>
              {:else}
                <div class="NotFound">Nothing found</div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>