<script context="module">
  import api from '../api'
  export async function preload(){
    const res = await api.getItems('about',{
      fields: '*.*,clients.file_id.*.*'
    })
    return {
      title: res.data[0].title,
      slogan: res.data[0].slogan,
      content: res.data[0].content || [],
      what_i_do_services: res.data[0].what_i_do_services || [],
      what_i_do_title: res.data[0].what_i_do_title || 'What I Do',
      facts: res.data[0].fun_facts || [],
      facts_title: res.data[0].fun_facts_title || 'Fun Facts',
      me: res.data[0].me || [],
    }
  }
</script>
<script>
  import { fadeIn, fadeOut } from "../utilities";
  import Info from '../components/About/Info.svelte'
  import Services from '../components/About/Services.svelte'
  import FunFacts from '../components/About/FunFacts.svelte'
  export let title, slogan, content,what_i_do_services, what_i_do_title, facts,facts_title,me;
</script>
<svelte:head>
	<title>About | CHZ.DEV - Chingiz Mammadov - Front End Engineer / Full Stack Developer</title>
</svelte:head>
<section class="pt-page pt-page-current" in:fadeIn out:fadeOut>
  <div class="section-inner custom-page-content">
    <div class="section-title-block second-style">
      <h2 class="section-title">{title}</h2>
      <h5 class="section-description">{slogan}</h5>
    </div>
    <div class="section-content">
      <Info {me} {content} />
      <Services {what_i_do_title} {what_i_do_services} />
      <FunFacts {facts_title} {facts} />
    </div>
  </div>
</section>
