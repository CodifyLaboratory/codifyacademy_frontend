<script>
  let language = 'ru'
  import { texts } from '../localization'
  import CardsOfCourses from '../components/HomePageSections/CardsOfCourses.svelte'
  import CardsOfMentors from '../components/HomePageSections/CardsOfMentors.svelte'
  import CardsOfStudents from '../components/HomePageSections/CardsOfStudents.svelte'
  import FirstSection from '../components/HomePageSections/FirstSection.svelte'
  import Advantage from '../components/HomePageSections/Advantage.svelte'
  import StudentsProjects from '../components/HomePageSections/StudentsProjects.svelte'
</script>

<FirstSection
  h1={texts[language].homePage.h1}
  enrollButton={texts[language].buttons.enroll}
  testButton={texts[language].buttons.test}
/>
<CardsOfCourses courseCards={texts[language].homePage.courseСards} />
<Advantage text={texts[language].homePage} />
<CardsOfStudents students={texts[language].homePage.studentsCards} />
<StudentsProjects />
<CardsOfMentors mentors={texts[language].homePage.mentorsCards} />

<style>
</style>
