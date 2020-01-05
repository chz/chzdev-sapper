<script context="module">
  import api from '../api'
  export async function preload(){
    const res = await api.getItems('resume')
      return {
        title: res.data[0].title || '',
        slogan: res.data[0].slogan || '',
        cv: res.data[0].cv || '',
        experience: res.data[0].experience || [],
        skills: res.data[0].skills || []
      }
  }
</script>
<script>
  import Experience from '../components/Resume/Experience.svelte'
  import Skills from '../components/Resume/Skills.svelte'
  import { fadeIn, fadeOut } from "../utilities";
  export let title,slogan,cv,experience,skills;
</script>
<svelte:head>
  <title>Resume | CHZ.DEV - Chingiz Mammadov - Front End Engineer</title>
</svelte:head>
<section class="pt-page pt-page-home pt-page-current" in:fadeIn="{{ duration: 400,delay: 400 }}" out:fadeOut="{{ duration: 400 }}">
  <div class="section-inner custom-page-content">
    <div class="section-content">
      <div class="section-title-block second-style">
        <h2 class="section-title">{title}</h2>
        <h5 class="section-description">{slogan}</h5>
      </div>
      <div class="row">
        <Experience {experience} />
        <Skills {skills} {cv} />
      </div>
    </div>
  </div>
</section>
