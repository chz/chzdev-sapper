<script>
  export let segment;
	import Nav from '../components/Nav.svelte'
	import Header from '../components/Header.svelte'
  import { goto, stores } from '@sapper/app';
  import {isMenuOpened} from '../store'
  const { page, preloading, session } = stores();

  page.subscribe(({ path, params, query }) => {
    isMenuOpened.update(()=> false)
  })
</script>
<!--<Nav {segment}/>-->
<div id="page" class="page">
  <Header {segment} />
  <!-- Main Content -->
  <div id="main" class="site-main">
    <!-- Page changer wrapper -->
    <div class="pt-wrapper">
      <!-- Subpages -->
      <div class="subpages">
        <slot />
      </div>
    </div>
    <!-- /Page changer wrapper -->
  </div>
  <!-- /Main Content -->
</div>
