<script context="module">
  import {request} from "../../api";
  export async function preload(page) {
    const { course } = page.params;
    const course_data = await request('get', `courses/${course}`)
    return { course_data };
  }
</script>

<script>
  import CourseSectionOne from '../../components/CoursePageSections/CourseSectionOne.svelte'
  import CourseWhy from '../../components/CoursePageSections/CourseWhy.svelte'
  import CourseHow from '../../components/CoursePageSections/CourseHow.svelte'
  import CoursePlan from '../../components/CoursePageSections/CoursePlan.svelte'
  import Internship from '../../components/HomePageSections/Internship.svelte'
  import Employment from '../../components/HomePageSections/Employment.svelte'
  import CardsOfMentors from '../../components/HomePageSections/CardsOfMentors.svelte'
  import StudentsProjects from '../../components/HomePageSections/StudentsProjects.svelte'
  import EnrollForCourse from '../../components/HomePageSections/EnrollForCourse.svelte'

  let id
  let activeLang
  export let course_data = {}

</script>

<svelte:head>
  <title>Codify Academy | IT - курсы программирования в Бишкеке</title>
  <meta name="description" content="Курсы программирования в Бишкеке. Обучись актуальной профессии и начни зарабатывать" />
  <meta
    name="keywords"
    content="курсы программирования бишкек, школа программирования, курсы разработки, IT курсы в Бишкеке"
  />
  <meta property="og:title" content="Codify Academy | IT - курсы программирования в Бишкеке" />
  <meta
    property="og:description"
    content="Курсы программирования в Бишкеке. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="og:image" content="https://codifylab.com/first-image.webp" />
  <meta property="og:image:alt" content="title image of site" />
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="1024" />
  <meta property="og:site_name" content="codifylab.com" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:type" content="website" />
  <meta property="og:image:secure_url" content="https://codifylab.com/first-image.webp" />

  <meta property="twitter:title" content="Codify Academy | IT - курсы программирования в Бишкеке" />
  <meta
    property="twitter:description"
    content="Курсы программирования в Бишкеке. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta name="twitter:title" content="Codify Academy | IT - курсы программирования в Бишкеке" />
  <meta
    name="twitter:description"
    content="Курсы программирования в Бишкеке. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="twitter:image" content="https://codifylab.com/first-image.webp" />
  <meta property="twitter:image:alt" content="title image of site" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="asd">
  {#if !course_data}
    <section style="height: 200vh;">
      <img class="loadingLogo" width="136px" height="28px" src="./assets/icons/logo.webp" alt="logo" />
      <div class="loading">
        <div class="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </section>
  {/if}
  {#if course_data}
    <CourseSectionOne course={course_data} />
    <CourseWhy course={course_data} />
    <CourseHow />
    <Internship />
    <Employment />
    <div style="background-image: var(--primary-bg);">
      <CoursePlan course={course_data} />
      <CardsOfMentors courseId={course_data.id} />
<!--      <StudentsProjects />-->
      <EnrollForCourse ч />
    </div>
  {/if}
</div>

<style>
  .loadingLogo {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 20001;
  }
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20000;
    background-image: var(--primary-bg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
