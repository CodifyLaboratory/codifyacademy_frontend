<script>
  import Carousel from '@beyonk/svelte-carousel'
  import ArrowLeft from './carouselIcons/ArrowLeft.svelte'
  import ArrowRight from './carouselIcons/ArrowRight.svelte'

  export let needLoop = false
  export let elemPerPage = 3
  let carousel
  const handlePrevClick = () => {
    carousel.left()
  }
  const handleNextClick = () => {
    carousel.right()
  }
</script>

<div class="slideBox">
  <Carousel
    easing="ease-in-out"
    loop={needLoop}
    perPage={elemPerPage}
    dots={false}
    controls={false}
    duration={400}
    bind:this={carousel}
  >
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
  }
  .carouselArrows {
    width: 100%;
    display: flex;
    gap: 40px;
    justify-content: center;
  }
  @media screen and (max-width: 1050px) {
    .slideBox {
      max-width: 800px;
    }
  }
  @media screen and (max-width: 750px) {
    .slideBox {
      max-width: 400px;
    }
  }
</style>
