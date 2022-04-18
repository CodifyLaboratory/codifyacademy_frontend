<script>
  import Accordion from '../Accordion.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'

  export let course

  let activeLang = 'ru'

  let text = texts[activeLang].coursePlan

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang].coursePlan
  })
  let and = activeLang === 'ru' ? ' и ' : activeLang === 'en' ? ' and ' : ' и '
  function restyle(e) {
    let result
    if (e.includes('/')) {
      result = e.split('/').join(and)
      return result
    } else {
      return e
    }
  }
</script>

<section class="CoursePagePlan container">
  <h2>{text.h2}</h2>
  <p>{text.p1} {restyle(course.study_format)} {text.p2}</p>
  <div class="planAccordion">
    {#each course.program as entry, index}
      <Accordion {entry} id={index + 1} />
    {/each}
  </div>
</section>

<style>
  .CoursePagePlan > p,
  h2 {
    text-align: center;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 30px !important;
  }
  .planAccordion {
    width: 790px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 950px) {
    .planAccordion {
      width: auto;
    }
  }
  @media (max-width: 550px) {
    .CoursePagePlan > p,
    h2 {
      width: auto;
    }
  }
</style>
