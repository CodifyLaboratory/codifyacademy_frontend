<script>
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  import Carousel from '../ui/Carousel.svelte'
  export let students
</script>

<section class="sectionStudents">
  <h2>Трудоустроенные студенты</h2>
  <Carousel>
    {#each students as student}
      <div>
        <CardForPeople img={student.img} title={student.name}>
          <p class="student-work">{student.work}</p>
          <p>{student.prof}</p>
        </CardForPeople>
      </div>
    {/each}
  </Carousel>
</section>

<style>
  .student-work {
    margin-bottom: 10px;
  }
</style>
