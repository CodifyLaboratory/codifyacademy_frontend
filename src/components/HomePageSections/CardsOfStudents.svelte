<script>
  import { onMount } from 'svelte'
  import { SwiperSlide } from 'swiper/svelte'
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  import Carousel from '../ui/Carousel.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import axios from 'axios'

  let activeLang = 'ru'
  let students = []
  let text = texts[activeLang].homePage.h2.students

  language.subscribe(async lang => {
    activeLang = lang
    text = texts[activeLang].homePage.h2.students

    if (students.length) {
      axios
        .get(`https://codify.home.kg/${activeLang}/api/students/`)
        .then(({ data }) => {
          students = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  })

  onMount(async () => {
    axios
      .get(`https://codify.home.kg/${activeLang}/api/students/`)
      .then(({ data }) => {
        students = data
      })
      .catch(error => {
        console.log(error)
      })
  })
  let win
</script>

<svelte:window bind:innerWidth={win} />
<section class="sectionStudents">
  <h2 class="container">{text}</h2>
  {#if students.length}
    <Carousel elemPerPage={win > 1050 ? 3 : win < 1050 && win > 750 ? 2 : 1} elemCount={students.length}>
      {#each students as student}
        <SwiperSlide>
          <div>
            <CardForPeople img={student.photo} title={student.name}>
              <p class="student-work">{student.company}</p>
              <p style="min-height: 44px;">{student.position}</p>
            </CardForPeople>
          </div>
        </SwiperSlide>
      {/each}
    </Carousel>
  {/if}
</section>

<style>
  .student-work {
    margin-bottom: 10px;
  }
</style>
