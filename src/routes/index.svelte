<script context="module">
  import api from '../api';
  export async function preload(){
    const res = await api.getItems('home',{
      fields: '*.*,background.data'
    })
    return {home: res.data[0]}
  }
</script>
<script>
  import { fadeIn, fadeOut } from "../utilities";
  export let home;
  let title = home && home.title || '';
  let slogan = home && home.slogan || '';
  let bg = home && home.background && home.background.data.full_url || ''
  let isVisible = true;
</script>
<svelte:head>
	<title>CHZ.DEV - Chingiz Mammadov - Front End Engineer / Full Stack Developer</title>
</svelte:head>
<section class="pt-page pt-page-home start-page pt-page-current" in:fadeIn="{{ duration: 400,delay: 400 }}" out:fadeOut="{{ duration: 400 }}">
  <div class="section-inner vcentered" style="{`background-image: url(${bg})`}">
    <div class="mask"></div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="title-block">
            <h2>{title}</h2>
            <div class="text-rotation">
              <div class="item">
                <div class="sp-subtitle">{slogan}</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>
