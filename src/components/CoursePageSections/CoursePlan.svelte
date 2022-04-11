<script>
  import Accordion from '../Accordion.svelte'

  export let course
</script>

<section class="CoursePagePlan container">
  <div class="planAccordion">
    {#each course.program as entry, index}
      <Accordion {entry} id={index + 1} />
    {/each}
  </div>
</section>

<style>
  .planAccordion {
    width: 790px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
