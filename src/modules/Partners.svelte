<script>

    import {onMount} from "svelte";
    import {request} from "../api";

    let partners = []
    onMount(() => {
      request('get', 'partners/')
        .then((data) => {
          partners = data || []
        })
    })
</script>

<section class="partners-section container">
    <h2>Партнеры CODIFY</h2>
    <div class="partners-box">
        {#each partners as partner}
            <div class="partner-card">
                <img src={partner.logo} alt="partner">
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    .partners-box {
      display: grid;
      gap: 40px;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

      }
    }
    .partner-card {
      justify-self: center;
      align-self: center;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
</style>