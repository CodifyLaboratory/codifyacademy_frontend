<script>
  import {onMount} from "svelte";
  import {request} from "../../api";
  import NewAccordion from "../../components/NewAccordion.svelte";

  let faq = []

  onMount(() => {
    request('get', 'children-courses-faq/')
      .then((data) => {
        console.log('data', data)
        faq = data
      })
      .catch(error => {
        console.log(error)
      })
  })

</script>

<section class="CoursePagePlan container">
    <h2>Ответы на ваши вопросы</h2>
    <div class="planAccordion">
        {#each faq as entry, index}
            <NewAccordion {entry} id={index + 1} />
        {/each}
    </div>
</section>

<style>
    .CoursePagePlan > p,
    h2 {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 30px !important;
    }
    .planAccordion {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
</style>
