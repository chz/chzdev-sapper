<script context="module">
  import api from '../api'
  export async function preload(){
     const res = await api.getItems('contact')
      return {
        contact: res.data[0],
      }
  }
</script>
<script>
  export let contact;
  import { fadeIn, fadeOut } from "../utilities";
  let freelance = contact.freelance_available ? 'lnr-checkmark-circle' : 'lnr-cross-circle'
</script>
<svelte:head>
  <title>Contact | CHZ.DEV - Chingiz Mammadov - Front End Engineer</title>
</svelte:head>
<section class="pt-page pt-page-home pt-page-current" in:fadeIn="{{ duration: 400,delay: 400 }}" out:fadeOut="{{ duration: 400 }}">
  <div class="section-inner custom-page-content">
    <div class="section-content">
      <div class="section-title-block second-style">
        <h2 class="section-title">Contact</h2>
      </div>
    </div>
    <div class="row">
    {#if contact.phone}
      <div class="col-xs-12 col-sm-6">
        <div class="col-inner bs-30">
          <div class="lm-info-block gray-default"><i class="lnr lnr-phone-handset"></i>
            <h4><a class="dark" href="tel:{contact.phone}">{contact.phone}</a></h4><span class="lm-info-block-value"></span><span class="lm-info-block-text"></span>
          </div>
        </div>
      </div>
    {/if}
    {#if contact.address}
      <div class="col-xs-12 col-sm-6">
        <div class="col-inner bs-30">
          <div class="lm-info-block gray-default"><i class="lnr lnr-map-marker"></i>
            <h4>{contact.address}</h4><span class="lm-info-block-value"></span><span class="lm-info-block-text"></span>
          </div>
        </div>
      </div>
    {/if}
    {#if contact.email}
      <div class="col-xs-12 col-sm-6">
        <div class="col-inner bs-30">
          <div class="lm-info-block gray-default"><i class="lnr lnr-envelope"></i>
            <h4><a class="dark" href="mailto:{contact.email}">{contact.email}</a></h4><span class="lm-info-block-value"></span><span class="lm-info-block-text"></span>
          </div>
        </div>
      </div>
    {/if}
      <div class="col-xs-12 col-sm-6">
        <div class="col-inner bs-30">
          <div class="lm-info-block gray-default"><i class="lnr {freelance}"></i>
            <h4>Freelance Available</h4><span class="lm-info-block-value"></span><span class="lm-info-block-text"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  .dark {
    color:#333!important;
  }
  .lm-info-block {
    padding: 90px 10px 85px;
  }
</style>
