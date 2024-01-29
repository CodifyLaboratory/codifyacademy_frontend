<script>
  import FirstSection from '../components/HomePageSections/FirstSection.svelte'
  import EnrollForCourse from '../components/HomePageSections/EnrollForCourse.svelte'
  import { onMount } from 'svelte'
  import TestAndInfo from "../modules/TestAndInfo.svelte";
  import StudyPrograms from "../modules/StudyPrograms.svelte";
  import HappyStudents from "../modules/HappyStudents.svelte";
  import EducationLicense from "../components/HomePageSections/EducationLicense.svelte";
  import Partners from "../modules/Partners.svelte";
  import ProfessionsMap from "../modules/ProfessionsMap.svelte";
  import MainPageFAQ from "../modules/MainPageFAQ.svelte";
  import Media from "../modules/Media.svelte";
  import UTO from "../modules/UTO.svelte";
  import GraduatesWork from "../modules/GraduatesWork.svelte";
  import CheckList from "../modules/CheckList.svelte";

  let loading = true
  onMount(() => {
    loading = false
  })
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
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
</svelte:head>

{#if !loading}
  <div class="main-page">
    <FirstSection />
    <UTO />
    <TestAndInfo />
    <StudyPrograms />
    <ProfessionsMap />
    <HappyStudents />
    <Partners />
    <CheckList />
    <GraduatesWork />
    <EducationLicense type="main" />

    <MainPageFAQ />
    <Media />
    <EnrollForCourse forMainPage />
  </div>

{:else}
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

<style>
  .main-page h2 {
      text-align: start !important;
  }
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
