<script>
    import SectionTransparentCard from "../../components/ui/Cards/SectionTransparentCard.svelte";
    import SectionFilledCard from "../../components/ui/Cards/SectionFilledCard.svelte";
    export let title = ''
    export let type = "three_cards_transparent"
    export let cards = []
    const CurrentCard = type ==="three_cards_transparent" ? SectionTransparentCard : SectionFilledCard
</script>


<section class="container">
    <h2>{title}</h2>
    <div class={`${type}-box`}>
        {#each cards as card}
            <CurrentCard {...card} />
            {/each}
    </div>
</section>

<style lang="scss">

.three_cards_transparent-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 0;
  @media (max-width: 975px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    gap: 30px;
  }
}
  .two_cards-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 100%;
      gap: 10px;
    }
  }
</style>