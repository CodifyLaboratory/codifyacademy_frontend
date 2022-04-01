<script>
  import Carousel from '@beyonk/svelte-carousel'
  import ArrowLeft from './carouselIcons/ArrowLeft.svelte'
  import ArrowRight from './carouselIcons/ArrowRight.svelte'

  let carousel
  const handlePrevClick = () => {
    carousel.left()
  }
  const handleNextClick = () => {
    carousel.right()
  }
</script>

<div class="slideBox">
  <Carousel easing="ease-in-out" dots={false} controls={false} duration={400} bind:this={carousel}>
    <slot />
  </Carousel>
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
