<script>
  import { stores } from '@sapper/app'
  import { fade } from 'svelte/transition'

  const { preloading } = stores()
  const step = 5
  const duration = 400

  let show = false
  let filled = 0
  let interval

  $: {
    if ($preloading && !show) {
      show = true
      filled = 0.5
      interval = setInterval(() => {
        if (filled < 80) {
          filled += step
        } else if (filled < 90) {
          filled += step * 0.1
        } else {
          clearInterval(interval)
          interval = null
        }
      }, duration + 100)
    } else if (!$preloading && show) {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
      filled = 100
      setTimeout(() => {
        show = false
        filled = 0
      }, duration + 300)
    }
  }
</script>

<div class="loading-bar">
  {#if show}
    <div
      transition:fade
      class="fill"
      style={`
        transform: translate3d(${-100 + filled}%, 0, 0);
        transition: transform ${duration}ms ease;
      `}
    />
  {/if}
</div>

<style>
  .loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    z-index: 30000;
  }

  .loading-bar .fill {
    background: #0962ea;
    height: 100%;
    transform: translate3d(-100%, 0, 0);
    backface-visibility: hidden;
    perspective: 1000;
  }
</style>
