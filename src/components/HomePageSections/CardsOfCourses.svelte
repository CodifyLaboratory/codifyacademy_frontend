<script>
  import CardForCourses from '../ui/Cards/CardForCourses.svelte'
  export let courseCards
  export let h2
</script>

<section class="sectionCourses container">
  <h2>{h2}</h2>
  <div class="sectionCourses__buttons">
    <button class="button">Все курсы</button>
    <button class="button">Разработка</button>
    <button class="button">Дизайн</button>
    <button class="button">Менеджмент</button>
  </div>
  <div class="coursesCards">
    {#each courseCards as card}
      <CardForCourses cardInfo={card} />
    {/each}
  </div>
</section>

<style>
  .sectionCourses__buttons {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  .coursesCards {
    display: flex;
    justify-content: center;
    gap: 20px;
    row-gap: 70px;
    flex-wrap: wrap;
    margin-top: 80px;
  }
</style>
