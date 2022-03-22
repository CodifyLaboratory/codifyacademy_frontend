<script>
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  export let students
</script>

<div class="students">
  {#each students as student}
    <CardForPeople img={student.img} title={student.name}>
      <p class="student-work">{student.work}</p>
      <p>{student.prof}</p>
    </CardForPeople>
  {/each}
</div>

<style>
  .students {
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
