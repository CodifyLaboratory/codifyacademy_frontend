<script>
  import StudentsProjects from '../../components/HomePageSections/StudentsProjects.svelte'
  import { onMount } from 'svelte'
  import TeensFirstSection from "../../modules/teens-modules/TeensFirstSection.svelte";
  import TeensCardsOfCourses from "../../modules/teens-modules/TeensCardsOfCourses.svelte";
  import TeensFreeLesson from "../../modules/teens-modules/TeensFreeLesson.svelte";
  import TeensAdvantages from "../../modules/teens-modules/TeensAdvantages.svelte";
  import EducationLicense from "../../components/HomePageSections/EducationLicense.svelte";
  import EnrollForCourse from "../../components/HomePageSections/EnrollForCourse.svelte";
  import TeensStudentProject from "../../modules/teens-modules/TeensStudentProject.svelte";
  import TeensFAQ from "../../modules/teens-modules/TeensFAQ.svelte";
  import TeensLocation from "../../modules/teens-modules/TeensLocation.svelte";
  import InstaReviews from "../../modules/InstaReviews.svelte";

  let loading = true

  onMount(() => {
    loading = false
  })

</script>

{#if !loading}
    <TeensFirstSection />
    <TeensCardsOfCourses length={4} />
    <TeensFreeLesson />
    <TeensAdvantages />
    <TeensStudentProject />
    <InstaReviews />
    <EducationLicense />
    <TeensLocation />
    <TeensFAQ />
    <EnrollForCourse />
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
