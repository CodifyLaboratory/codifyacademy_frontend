<script>
  import TeensProgramCard from "../../components/ui/Cards/TeensProgramCard.svelte";
  export let cards = []
</script>


<section class="container">
    <h2>Программа курса</h2>
    <div class={`program-box`}>
        {#each cards as card, index}
            <TeensProgramCard index={index} {...card} />
        {/each}
    </div>
</section>

<style lang="scss">

  .program-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 975px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: 100%;
      gap: 10px;
    }
  }
</style>