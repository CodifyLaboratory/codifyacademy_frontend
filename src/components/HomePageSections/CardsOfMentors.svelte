<script>
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  import Carousel from '../ui/Carousel.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import { onMount } from 'svelte'
  import Instagram from '../ui/socialIcons/instagram.svelte'
  import Behance from '../ui/socialIcons/behance.svelte'
  import Linkedin from '../ui/socialIcons/linkedin.svelte'
  import { SwiperSlide } from 'swiper/svelte'
  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang].homePage.h2.mentors

  let mentors = []

  onMount(async () => {
    fetch('http://178.62.241.156/ru/api/mentors/')
      .then(response => response.json())
      .then(data => {
        mentors = data
      })
      .catch(error => {
        console.log(error)
      })
  })
  let win
</script>

<svelte:window bind:innerWidth={win} />
<section class="sectionMentors">
  <h2>{text}</h2>
  {#if mentors.length}
    <Carousel elemPerPage={win > 1050 ? 3 : win < 1050 && win > 750 ? 2 : 1}>
      {#each mentors as mentor}
        <SwiperSlide>
          <div>
            <CardForPeople img={mentor?.photo ? mentor?.photo : ''} title={mentor?.name ? mentor?.name : ''}>
              <div class="mentor-prof">
                <img src={`./assets/icons/CardForCourses/${mentor?.course?.icon}`} alt={mentor?.course?.icon} />
                <b>{mentor?.course.title}</b>
              </div>
              <p>{`Опыт работы: ${mentor?.experience}`}</p>
              <p>{`Место работы: ${mentor?.company}`}</p>
              <div class="social">
                {#if mentor?.instagram}
                  <Instagram href={mentor.instagram} />
                {/if}
                {#if mentor?.behance}
                  <Behance href={mentor.behance} />
                {/if}
                {#if mentor?.linkedin}
                  <Linkedin href={mentor.linkedin} />
                {/if}
              </div>
            </CardForPeople>
          </div>
        </SwiperSlide>
      {/each}
    </Carousel>
  {/if}
</section>

<style>
  .mentor-prof {
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 40px;
  }
  .mentor-prof > img {
    height: 100%;
    width: auto;
  }
  .social {
    margin-top: 20px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
