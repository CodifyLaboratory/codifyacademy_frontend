<script>
 import InstagramCard from "../components/ui/Cards/InstagramCard.svelte";
 import {onMount} from "svelte";
 import {request} from "../api";

 let reviews = []
export let type = 'children_course'

 console.log('reviews', type)

 onMount(() => {
   request('get', 'instagram-video-feedbacks/')
     .then((data) => {
       reviews = data.filter(d => d?.page_type === type)
     })
 })
</script>

<section class="insta-section">
    {#if type === 'children_course'}
        <div class="container">
            <h2>Отзывы учеников и родителей</h2>
        </div>
    {/if}
    <div class="container_flex">

    <div class="reviews_container">
        {#each reviews as review}
            <InstagramCard review={review?.publication_link} />
        {/each}

    </div>
    </div>

</section>

<style lang="scss">
  .insta-section {
    max-width: 100%;
    overflow: hidden;
  }
  .container_flex {
    display: flex;
    justify-content: center;

  }
    .reviews_container {
      display: flex;
      gap: 20px;
      overflow: auto;
      padding: 0 5vw 0;
    }
</style>