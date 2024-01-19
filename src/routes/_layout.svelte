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
  import {onMount} from "svelte";

  const {page} = stores()
  export let version = null

  onMount(() => {
      console.log('RES', version)
      if(version?.update_count && version.update_count > JSON.parse(localStorage.getItem('version'))) {
        console.log('AAAAAAA')
        caches.keys().then(res => {
          const promises = []
          for (let name of res) {
            promises.push(caches.delete(name))
          }
          Promise.all(promises).then(() => {
            localStorage.setItem('version', JSON.stringify(version.update_count))
            history.pushState(null, null, window.location.href)
          })
        })
      }
  })

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
