<script>
  import { onMount } from 'svelte'

  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  import Carousel from '../ui/Carousel.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang].homePage.h2.students

  let students = []

  onMount(async () => {
    fetch('http://178.62.241.156/ru/api/students/')
      .then(response => response.json())
      .then(data => {
        students = data
        // console.log(students)
        console.log(win)
      })
      .catch(error => {
        console.log(error)
      })
  })
  let win
  console.log(win)
</script>

<svelte:window bind:innerWidth={win} />
<section class="sectionStudents">
  <h2 class="container">{text}</h2>
  {#if students.length}
    <Carousel needLoop={students.length > 3} elemPerPage={win > 1050 ? 3 : win < 1050 && win > 750 ? 2 : 1}>
      {#each students as student}
        <div>
          <CardForPeople img={student.photo} title={student.name}>
            <p class="student-work">{student.company}</p>
            <p>{student.position}</p>
          </CardForPeople>
        </div>
      {/each}
    </Carousel>
  {/if}
</section>

<style>
  .student-work {
    margin-bottom: 10px;
  }
</style>
