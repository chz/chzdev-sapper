<script context="module">
  import {ApiUrl} from '../api'
  export async function preload(){
    const response = await this.fetch(`${ApiUrl}/about`)
    const about = await response.json()
    return {
      title: about.title,
      slogan: about.slogan,
      content: about.description || [],
      what_i_do_services: about.what_i_do_services || [],
      what_i_do_title: about.what_i_do_title || 'What I Do',
      facts: about.fun_facts || [],
      facts_title: about.fun_facts_title || 'Fun Facts',
      me: about.me || [],
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
<section class="pt-page pt-page-current" in:fadeIn="{{ duration: 400,delay: 400 }}" out:fadeOut="{{ duration: 400 }}">
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
