<script>
  import { onMount } from 'svelte'
  import ArrowLeft from './carouselIcons/ArrowLeft.svelte'
  import ArrowRight from './carouselIcons/ArrowRight.svelte'
  let Carousel // for saving Carousel component class
  let carousel // for calling methods of the carousel instance

  onMount(async () => {
    const module = await import('svelte-carousel')
    Carousel = module.default
  })
  const handleNextClick = () => {
    carousel.goToNext()
  }
  const handlePrevClick = () => {
    carousel.goToPrev()
  }
</script>

<div class="slideBox">
  <svelte:component this={Carousel} arrows={false} particlesToShow={3} particlesToScroll={2} bind:this={carousel}>
    <slot />
  </svelte:component>
  <div class="carouselArrows">
    <ArrowLeft onClick={handlePrevClick} />
    <ArrowRight onClick={handleNextClick} />
  </div>
</div>

<style>
  .slideBox {
    max-width: 1200px;
    margin: 0 auto;
    width: 100vw;
    padding: 0 30px;
  }
  .carouselArrows {
    width: 100%;
    display: flex;
    gap: 40px;
    justify-content: center;
  }
</style>
