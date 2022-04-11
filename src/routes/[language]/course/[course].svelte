<script>
  import CourseSectionOne from '../../../components/CoursePageSections/CourseSectionOne.svelte'
  import CourseWhy from '../../../components/CoursePageSections/CourseWhy.svelte'
  import CoursePlan from '../../../components/CoursePageSections/CoursePlan.svelte'
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { language } from '../../../stores'

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
    <CoursePlan {course} />
  {/if}
  <section>asdasd</section>
  <!-- <PriceOfCourse /> -->
</div>

<style>
</style>
