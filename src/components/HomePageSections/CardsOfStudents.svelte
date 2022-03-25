<script>
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  export let students
</script>

<section class="sectionStudents">
  <h2>Трудоустроенные студенты</h2>
  <div class="studentsCards">
    {#each students as student}
      <CardForPeople img={student.img} title={student.name}>
        <p class="student-work">{student.work}</p>
        <p>{student.prof}</p>
      </CardForPeople>
    {/each}
  </div>
</section>

<style>
  .studentsCards {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .student-work {
    margin-bottom: 10px;
  }
</style>
