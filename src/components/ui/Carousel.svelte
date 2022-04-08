<script>
  import ArrowLeft from './carouselIcons/ArrowLeft.svelte'
  import ArrowRight from './carouselIcons/ArrowRight.svelte'
  import 'swiper/swiper.min.css'
  import { Swiper } from 'swiper/svelte'

  export let elemPerPage = 3

  let swiper

  const handlePrevClick = () => {
    swiper.slidePrev()
  }
  const handleNextClick = () => {
    swiper.slideNext()
  }
</script>

<div class="slideBox">
  <Swiper loop={true} spaceBetween={20} slidesPerView={elemPerPage} on:swiper={e => (swiper = e.detail[0])}>
    <slot />
  </Swiper>
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
