<script>
  import CourseSectionOne from '../../../components/CoursePageSections/CourseSectionOne.svelte'
  import CourseWhy from '../../../components/CoursePageSections/CourseWhy.svelte'
  import CourseHow from '../../../components/CoursePageSections/CourseHow.svelte'
  import CoursePlan from '../../../components/CoursePageSections/CoursePlan.svelte'
  import Internship from '../../../components/HomePageSections/Internship.svelte'
  import Employment from '../../../components/HomePageSections/Employment.svelte'
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { language } from '../../../stores'
  import CardsOfMentors from '../../../components/HomePageSections/CardsOfMentors.svelte'
  import StudentsProjects from '../../../components/HomePageSections/StudentsProjects.svelte'
  import EnrollForCourse from '../../../components/HomePageSections/EnrollForCourse.svelte'

  let id
  let activeLang
  let course

  language.subscribe(async lang => {
    activeLang = lang
    if (id) {
      axios
        .get(`http://codify.home.kg/${activeLang}/api/courses/${id}`)
        .then(({ data }) => {
          course = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  })

  onMount(async () => {
    let href = window.location.href
    id = href.split('/').pop()
    axios
      .get(`http://codify.home.kg/${activeLang}/api/courses/${id}`)
      .then(({ data }) => {
        course = data
        console.log(course)
      })
      .catch(error => {
        console.log(error)
      })
  })
</script>

<div class="asd">
  {#if course}
    <CourseSectionOne {course} />
    <CourseWhy {course} />
    <CourseHow />
    <Internship />
    <Employment />
    <div style="background-image: var(--primary-bg);">
      <CoursePlan {course} />
      <CardsOfMentors />
      <StudentsProjects />
      <EnrollForCourse />
    </div>
  {/if}
</div>

<style>
</style>
