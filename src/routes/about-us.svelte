<script>
  import { onMount} from "svelte";
  import Loading from '../components/ui/loading.svelte'

  let iframe;
  let loading = true
  function handleMessage(event) {
    if (event.origin === "https://letscodify.io") {
      const height = event.data.height;
      iframe.style.height = `${height}px`;
        if(height) {
          loading =false
        }
    }
  }

  onMount(() => {
    window.addEventListener('message', handleMessage);
  });

</script>

<div class="iframe-container">
    {#if loading}
        <div class="loading-container">
            <Loading />
        </div>
    {/if}
<iframe bind:this={iframe} frameborder="0" title="About us" width="100%" scrolling="no"  src="https://letscodify.io/about-us?is_academy=true"></iframe>
</div>


<style>
    .loading-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
</style>