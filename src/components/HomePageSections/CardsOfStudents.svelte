<script>
  import { onMount } from 'svelte'
  import { SwiperSlide } from 'swiper/svelte'
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  import Carousel from '../ui/Carousel.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang].homePage.h2.students

  let students = []

  onMount(async () => {
    fetch(`http://codify.home.kg/${activeLang}/api/students/`)
      .then(response => response.json())
      .then(data => {
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
    <Carousel elemPerPage={win > 1050 ? 3 : win < 1050 && win > 750 ? 2 : 1}>
      {#each students as student}
        {console.log(student)}
        <SwiperSlide>
          <div>
            <CardForPeople img={student.photo} title={student.name}>
              <p class="student-work">{student.company}</p>
              <p>{student.position}</p>
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
