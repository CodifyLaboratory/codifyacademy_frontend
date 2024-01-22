<script>

  import {onMount} from "svelte";
  import {request} from "../api";

  let graduates = []
  onMount(() => {
    request('get', 'graduates-employers/')
      .then((data) => {
        graduates = data || []
      })
  })
</script>

<section class="partners-section container">
    <h2>Где работают выпускники CODIFY</h2>
    <div class="partners-box">
        {#each graduates as partner}
            <div class="partner-card">
                <img src={partner.logo} alt="partner">
            </div>
        {/each}
    </div>
</section>

<style>
    .partners-box {
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }
    .partner-card {
        justify-self: center;
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .partner-card img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        .partners-box {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
    }
</style>