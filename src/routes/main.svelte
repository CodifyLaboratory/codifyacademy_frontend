<script>
  let language = 'ru'
  import { texts } from '../localization'
  import CardForCourses from '../components/ui/Cards/CardForCourses.svelte'
  import CardsOfMentors from '../components/HomePageSections/CardsOfMentors.svelte'
  import CardsOfStudents from '../components/HomePageSections/CardsOfStudents.svelte'
</script>

<div class="main container">
  {#each texts[language].courseСards as card}
    <CardForCourses cardInfo={card} />
  {/each}
</div>
<CardsOfMentors mentors={texts[language].mentors} />
<CardsOfStudents students={texts[language].students} />

<style>
  .main {
    display: flex;
    justify-content: center;
    gap: 20px;
    row-gap: 70px;
    flex-wrap: wrap;
    margin: 50px auto;
  }
</style>
