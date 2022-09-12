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
        .get(`https://codifylab.uz/${activeLang}/api/courses/${id}`)
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
      .get(`https://codifylab.uz/${activeLang}/api/courses/${id}`)
      .then(({ data }) => {
        course = data
        console.log(course)
      })
      .catch(error => {
        console.log(error)
      })
  })
</script>

<svelte:head>
  <title>Codify Academy | IT - курсы программирования в Ташкенте</title>
  <meta name="description" content="" />
  <meta
    name="keywords"
    content="курсы программирования ташкент, школа программирования, курсы разработки, IT курсы в Ташкенте"
  />
  <meta property="og:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    property="og:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="og:image" content="https://codifylab.uz/first-image.jpg" />
  <meta property="og:image:alt" content="title image of site" />
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="1024" />
  <meta property="og:site_name" content="codifylab.uz" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:type" content="website" />
  <meta property="og:image:secure_url" content="https://codifylab.uz/first-image.jpg" />

  <meta property="twitter:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    property="twitter:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta name="twitter:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    name="twitter:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="twitter:image" content="https://codifylab.uz/first-image.jpg" />
  <meta property="twitter:image:alt" content="title image of site" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Global site tag (gtag.js) - Google Ads: 10891704135 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10891704135"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-10891704135');
  </script>
  
  <!-- Event snippet for Начало оформления покупки conversion page -->
  <script>
    gtag('event', 'conversion', {'send_to': 'AW-10891704135/FLnxCK_zp7gDEMfuyMko'});
  </script>
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '740755837028287');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1"
         src="https://www.facebook.com/tr?id=740755837028287&ev=PageView
&noscript=1"/>
  </noscript>
  <!-- End Facebook Pixel Code -->
</svelte:head>

<div class="asd">
  {#if !course}
    <section style="height: 200vh;">
      <img class="loadingLogo" src="./assets/icons/logo.svg" alt="logo" />
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
  {#if course}
    <CourseSectionOne {course} />
    <CourseWhy {course} />
    <CourseHow />
    <Internship />
    <Employment />
    <div style="background-image: var(--primary-bg);">
      <CoursePlan {course} />
      <CardsOfMentors courseId={course.id} />
      <StudentsProjects />
      <EnrollForCourse />
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
    top: 0;
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
