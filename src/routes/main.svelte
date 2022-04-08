<script>
  import CardsOfCourses from '../components/HomePageSections/CardsOfCourses.svelte'
  import CardsOfMentors from '../components/HomePageSections/CardsOfMentors.svelte'
  import CardsOfStudents from '../components/HomePageSections/CardsOfStudents.svelte'
  import FirstSection from '../components/HomePageSections/FirstSection.svelte'
  import Advantage from '../components/HomePageSections/Advantage.svelte'
  import StudentsProjects from '../components/HomePageSections/StudentsProjects.svelte'
  import SeoTags from '../components/SeoTags.svelte'
  import EnrollForCourse from '../components/HomePageSections/EnrollForCourse.svelte'
  import Internship from '../components/HomePageSections/Internship.svelte'
  import Employment from '../components/HomePageSections/Employment.svelte'
</script>

<svelte:head>
  <SeoTags />
</svelte:head>

<FirstSection />
<CardsOfCourses lenght={8} />
<Advantage />
<Internship />
<Employment />
<div style="background-image: var(--primary-bg);">
  <CardsOfStudents />
  <StudentsProjects />
  <CardsOfMentors />
  <EnrollForCourse />
</div>
