<script context="module">
  import {ApiUrl} from '../../api'
  export async function preload({params}){
    const { portfolio } = params;
    const response = await this.fetch(`${ApiUrl}/portfolio/${portfolio}`)
    const portfolioData = await response.json()
    console.log('portfolioData',portfolioData);
    if(!portfolioData) this.error( 404,'Not found')
    return {
      portfolio: portfolioData
    }
  }
</script>
<script>
  export let portfolio
  import Carousel from '../../components/Carousel.svelte'
  import { fadeIn, fadeOut } from "../../utilities";
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let portfolioImages = portfolio.images.length ? portfolio.images.map(image => image) : []
  let portfolioDate = function(){
    if (!portfolio.date) return ''
    const d = new Date(portfolio.date);
    return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
  }
  let onChange = function({detail}){
    console.log('onChange', detail);
  }
  let onInit = function({detail}){
    console.log('onInit', detail);
  }
</script>
<svelte:head>
  <title>{`${portfolio.title} | CHZ.DEV - Chingiz Mammadov - Front End Engineer`}</title>
</svelte:head>
<div class="pt-page pt-page-home pt-page-current" in:fadeIn="{{ duration: 400,delay: 400 }}" out:fadeOut="{{ duration: 400 }}">
  <div class="ajax-page-content">
    <article class="ajax-page-wrapper">
      <div class="ajax-page-nav">
        <div class="nav-item ajax-page-close-button">
          <a href="/portfolio"><i class="lnr lnr-cross"></i></a>
        </div>
      </div>
      <header class="ajax-page-title">
        <h1>{portfolio.title}</h1>
      </header>
      <div class="row">
        <div class="col-sm-7 col-md-7 portfolio-block">
          <Carousel perPage={1}>
            {#each portfolioImages as image}
              <div class="slide-content">
                <img src={image} alt="">
              </div>
            {/each}
          </Carousel>
        </div>
        <article class="col-sm-5 col-md-5 portfolio-block">
          <!-- Project Description-->
          <div class="project-description">
            <div class="block-title">
              <h3>Description</h3>
            </div>
            <ul class="project-general-info">
              <li v-if="portfolio.client">
                <p><i class="fa fa-user"></i> {portfolio.client}</p>
              </li>
              <li v-if="portfolio.web_site">
                <p><i class="fa fa-globe"></i><a href="{portfolio.website}" target="_blank">{portfolio.website.replace('http://','www.')}</a></p>
              </li>
              <li v-if="portfolioDate">
                <p><i class="fa fa-calendar"></i>{portfolioDate()}</p>
              </li>
            </ul>
            {#if portfolio.description}
               <div class="text-justify">
                {@html portfolio.description}
               </div>
            {/if}

            <!-- /Project Description-->
            {#if portfolio.technology.length}
            <!-- Technology-->
              <div class="tags-block">
                <div class="block-title">
                  <h3>Technology</h3>
                </div>
                <ul class="tags">
                  {#each portfolio.technology as technology}
                     <li><a href="javascript:void(0)">{technology}</a></li>
                  {/each}
                </ul>
              </div>
            <!-- /Technology-->
            {/if}
            <!-- Project Description-->
          </div>
        </article>
      </div>
    </article>
  </div>
</div>
