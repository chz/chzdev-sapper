<script context="module">
  import {ApiUrl} from '../../api'
  import {shuffle} from '../../utilities/index'
  export async function preload(){
      const response = await this.fetch(`${ApiUrl}/portfolio`)
      const portfolios = await response.json()
      return {
        portfolios: shuffle(portfolios)
      }
    }
</script>
<script>
  export let portfolios;
  let selectedFilter = '';
  import { fadeIn, fadeOut } from "../../utilities";
  import PortfolioItem from '../../components/Portfolio/PortfolioItem.svelte'
  $: filterPortfolios = selectedFilter ? portfolios.filter(portfolio => portfolio.category === selectedFilter) : portfolios

  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });
</script>
<svelte:head>
  <title>Portfolio | CHZ.DEV - Chingiz Mammadov - Front End Engineer</title>
</svelte:head>
<section class="pt-page pt-page-home pt-page-current" in:fadeIn="{{ duration: 400,delay: 400 }}" out:fadeOut="{{ duration: 400 }}">
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
              <li class="{selectedFilter === 'PERSONAL' ? 'active':''}">
                <a href="javascript:void(0)" class="filter btn btn-sm btn-link" on:click="{()=>{selectedFilter = 'PERSONAL'}}">PERSONAL</a>
              </li>
              <li class="{selectedFilter === 'SAFAROFF' ? 'active':''}">
                <a href="javascript:void(0)" class="filter btn btn-sm btn-link" on:click="{()=>{selectedFilter = 'SAFAROFFF'}}">SAFAROFF</a>
              </li>
              <li class="{selectedFilter === 'ENDORPHIN' ? 'active':''}">
                <a href="javascript:void(0)" class="filter btn btn-sm btn-link" on:click="{()=>{selectedFilter = 'ENDORPHIN'}}">ENDORPHIN</a>
              </li>
            </ul>
            <!-- Portfolio Grid-->
            <div class="portfolio-grid three-columns">
              {#each filterPortfolios as portfolio (portfolio.slug)}
                <div in:receive="{{key: portfolio.slug}}" out:send="{{key: portfolio.slug}}" animate:flip>
                  <PortfolioItem {portfolio}/>
                </div>
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
