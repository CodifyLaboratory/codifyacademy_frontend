<script context="module">
  import {request} from "../api";
  export async function preload(page) {
    const version = await request('get', 'front-update-count/')
    return { version };
  }
</script>
<script>
  import Footer from '../components/ui/Footer.svelte'
  import LoadingBar from '../components/ui/LoadingBar.svelte'
  import Header from '../components/ui/Header.svelte'
  import {stores} from "@sapper/app";

  const {page} = stores()


</script>

<div class="site">
  <LoadingBar />
  {#if !$page.path.includes('test')}
  <Header path={$page.path} />
<!--  <Assistant />-->
  {/if}

  <main class="site-content">
    <slot />
  </main>
  {#if !$page.path.includes('test')}
  <Footer />
  {/if}

</div>
