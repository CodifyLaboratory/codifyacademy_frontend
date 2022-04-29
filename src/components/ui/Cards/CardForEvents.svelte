<script>
    import 'swiper/swiper.min.css'
  import { Swiper, SwiperSlide } from 'swiper/svelte'
  import { Pagination } from "swiper"
  import "swiper/modules/pagination/pagination.min.css"
  import { language } from '../../../stores'
  import { texts } from '../../../localization'
  // let event = false
  let swiper
  let activeLang = 'ru'
  let text = texts[activeLang].eventsPage
  export let event

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang].eventsPage
  })

  const handlePrevClick = () => {
    swiper.slidePrev()
  }
  const handleNextClick = () => {
    swiper.slideNext()
  }

</script>


<div class="cardForEvents">
  <div class="eventSlider">
    <div class="leftBtn sliderBtn" on:click={handlePrevClick}>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.78 6.71997C6.92069 6.57946 6.99982 6.38882 7 6.18997V5.80997C6.9977 5.61156 6.91888 5.4217 6.78 5.27997L1.64 0.149974C1.54612 0.055318 1.41832 0.0020752 1.285 0.0020752C1.15168 0.0020752 1.02388 0.055318 0.93 0.149974L0.22 0.859974C0.125936 0.952138 0.0729284 1.07828 0.0729284 1.20997C0.0729284 1.34166 0.125936 1.46781 0.22 1.55997L4.67 5.99997L0.22 10.44C0.125343 10.5339 0.0721006 10.6617 0.0721006 10.795C0.0721006 10.9283 0.125343 11.0561 0.22 11.15L0.93 11.85C1.02388 11.9446 1.15168 11.9979 1.285 11.9979C1.41832 11.9979 1.54612 11.9446 1.64 11.85L6.78 6.71997Z" fill="#ECEDED"/>
        </svg>        
    </div>
    <div class="rightBtn sliderBtn" on:click={handleNextClick}>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.78 6.71997C6.92069 6.57946 6.99982 6.38882 7 6.18997V5.80997C6.9977 5.61156 6.91888 5.4217 6.78 5.27997L1.64 0.149974C1.54612 0.055318 1.41832 0.0020752 1.285 0.0020752C1.15168 0.0020752 1.02388 0.055318 0.93 0.149974L0.22 0.859974C0.125936 0.952138 0.0729284 1.07828 0.0729284 1.20997C0.0729284 1.34166 0.125936 1.46781 0.22 1.55997L4.67 5.99997L0.22 10.44C0.125343 10.5339 0.0721006 10.6617 0.0721006 10.795C0.0721006 10.9283 0.125343 11.0561 0.22 11.15L0.93 11.85C1.02388 11.9446 1.15168 11.9979 1.285 11.9979C1.41832 11.9979 1.54612 11.9446 1.64 11.85L6.78 6.71997Z" fill="#ECEDED"/>
        </svg>
    </div>
    <Swiper
    pagination
    modules={[Pagination]}
    loop={true}
    spaceBetween={10}
    slidesPerView={1}
    on:swiper={e => (swiper = e.detail[0])}
    >
      {#each event.images as image}
        <SwiperSlide>
          <img class="sliderImage" src={image.image} alt={image.id}>
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
  <div class="eventInfo">
    <h3>{event.title}</h3>
    {#if event.type === 'Event'}
      <div class="event_information">
        <div>
          <img src="/assets/icons/CardForEvents/date.svg" alt="date">
          <p><strong>{text.date}</strong></p>
          <p>{event.event_date}</p>
        </div>
        <div>
          <img src="/assets/icons/CardForEvents/time.svg" alt="time">
          <p><strong>{text.time}</strong></p>
          <p>{event.event_time}</p>
        </div>
        <div>
          <img src="/assets/icons/CardForEvents/place.svg" alt="place">
          <p><strong>{text.place}</strong></p>
          <p>{event.place}</p>
        </div>
        <div>
          <img src="/assets/icons/CardForEvents/location.svg" alt="location">
          <p><strong>{text.address}</strong></p>
          <p>{event.address}</p>
        </div>
      </div>
    {/if}
    <p class="description">{event.type === 'Event'? event.event_description : event.news_description}</p>
  </div>
</div>

<style>
  .sliderBtn {
    position: absolute;
    top: calc(50% - 16px);
    z-index: 2;
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: var(--blue-main);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s all;
  }
  .sliderBtn svg path {
    transition: 0.2s all;
  }

  .sliderBtn:hover {
    border-color: var(--green);
  }
  .sliderBtn:hover svg path {
    fill: var(--green)
  }
  .leftBtn {
    left: 10px;
    transform: rotate(180deg);

  }
  .rightBtn {
    right: 10px;
  }
  h3{
    font-size: 22px;
  }
  strong {
    font-weight: 500;
  }
  .description {
    font-size: 16px;
  }
  .cardForEvents {
    display: flex;
    background: linear-gradient(124.4deg, rgba(7, 36, 78, 0.7) 1.34%, rgba(95, 14, 157, 0.1) 101.18%);
    border-radius: 10px;
    align-items: flex-start;
    overflow: hidden;
    min-height: 300px;

  }
  .eventSlider {
    position: relative;
    width: 450px;
    height: 300px;
  }
  .eventSlider :global(.swiper-pagination-bullet.swiper-pagination-bullet-active){
    background: white;
  }
  .eventSlider :global(.swiper-pagination-bullet){
    background: rgba(38, 56, 134, 1);
    opacity: 1;
  }
  .sliderImage {
    width: 450px;
    height: 300px;
    object-fit: cover;
  }
  .eventInfo {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    justify-content: flex-start;
  }
  .event_information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .event_information div {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
  }
  @media (max-width: 960px){
    .cardForEvents {
      flex-direction: column;
    }
    .sliderImage,
    .eventSlider {
      width: 100%;
      height: auto;
      aspect-ratio: 3/2;
    }
  }
</style>