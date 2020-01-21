<script context="module">
  import {ApiUrl} from '../api'
  export async function preload(){
    const response = await this.fetch(`${ApiUrl}/resume`)
    const resume = await response.json()
      return {
        title: resume.title || '',
        slogan: resume.slogan || '',
        cv: resume.cv || '',
        experience: resume.experience || [],
        skills: resume.skills || []
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
