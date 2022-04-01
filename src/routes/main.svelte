<script>
  export let language = 'ru'
  import { texts } from '../localization'
  import CardsOfCourses from '../components/HomePageSections/CardsOfCourses.svelte'
  import CardsOfMentors from '../components/HomePageSections/CardsOfMentors.svelte'
  import CardsOfStudents from '../components/HomePageSections/CardsOfStudents.svelte'
  import FirstSection from '../components/HomePageSections/FirstSection.svelte'
  import Advantage from '../components/HomePageSections/Advantage.svelte'
  import StudentsProjects from '../components/HomePageSections/StudentsProjects.svelte'
  import SeoTags from '../components/SeoTags.svelte'
  import EnrollForCourse from '../components/HomePageSections/EnrollForCourse.svelte'
</script>

<svelte:head>
  <SeoTags />
</svelte:head>
<FirstSection
  h1={texts[language].homePage.h1}
  enrollButton={texts[language].buttons.enroll}
  testButton={texts[language].buttons.test}
/>
<CardsOfCourses h2={texts[language].homePage.h2.courses} courseCards={texts[language].homePage.courseСards} />
<Advantage text={texts[language].homePage} />
<div style="background-image: var(--primary-bg);">
  <CardsOfStudents students={texts[language].homePage.studentsCards} />
  <StudentsProjects />
  <CardsOfMentors mentors={texts[language].homePage.mentorsCards} />
  <EnrollForCourse />
</div>

<style>
</style>
