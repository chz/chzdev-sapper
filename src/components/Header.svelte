<script>
  export let segment;
  import {isMenuOpened} from '../store'
  import Nav from './Nav.svelte'
  let headerClass
  $: $isMenuOpened ? headerClass = 'animate' : headerClass = 'animate mobile-menu-hide'
  const toggleSidebar = () => {
    isMenuOpened.update(val=> val = !val)
  }
</script>
<!-- Header -->
<header id="site_header" class="header {headerClass}">
  <div class="header-content clearfix">
    <div class="my-photo">
      <img src="https://api.chz.dev/uploads/_/originals/logo.png" alt="image">
    </div>

    <div class="site-title-block">
      <div class="site-title">CHZ.DEV</div>
    </div>
    <Nav {segment}/>
    <!-- Social Links -->
    <div class="social-links">
      <a href="javascript:void(0)" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="javascript:void(0)" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="javascript:void(0)" target="_blank"><i class="fab fa-facebook-f"></i></a>
    </div>
    <!-- / Social Links -->

    <!-- Copyrights -->
    <div class="copyrights">© 2020 All rights reserved.</div>
    <!-- / Copyrights -->
  </div>
</header>
<!-- /Header -->

<!-- Mobile Header -->
<div class="mobile-header mobile-visible">
  <div class="mobile-logo-container">
    <div class="mobile-header-image">
      <a href="javascript:void(0)">
        <img src="https://api.chz.dev/uploads/_/originals/logo.png" alt="image">
      </a>
    </div>
    <div class="mobile-site-title"><a href="/">CHZ.DEV</a></div>
  </div>

  <a href="javascript:void(0)" on:click={toggleSidebar} class="menu-toggle mobile-visible">
    <i class="fa fa-bars"></i>
  </a>
</div>
<!-- /Mobile Header -->
