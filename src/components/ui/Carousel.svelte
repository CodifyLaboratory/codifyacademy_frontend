<script>
  import ArrowLeft from './carouselIcons/ArrowLeft.svelte'
  import ArrowRight from './carouselIcons/ArrowRight.svelte'
  import 'swiper/swiper.min.css'
  import { Swiper } from 'swiper/svelte'

  export let elemPerPage = 3
  export let elemCount = 2
  let swiper

  const handlePrevClick = () => {
    swiper.slidePrev()
  }
  const handleNextClick = () => {
    swiper.slideNext()
  }
</script>

<div class="slideBox" style={`max-width: ${elemPerPage === 2 ? '800px' : ''}`}>
  <Swiper
    loop={elemPerPage < elemCount}
    spaceBetween={20}
    slidesPerView={elemPerPage}
    on:swiper={e => (swiper = e.detail[0])}
  >
    <slot />
  </Swiper>
  <div class="carouselArrows" style={` display: ${elemPerPage >= elemCount ? 'none' : 'flex'} `}>
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
      width: 95%;
    }
  }
  @media screen and (max-width: 750px) {
    .slideBox {
      max-width: 400px;
      width: 95%;
    }
  }
</style>
