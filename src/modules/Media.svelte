<script>
  import {onMount} from "svelte";
  import {request} from "../api";
  import moment from "moment";
  import 'moment/locale/ru'
  let publications = []

  // id
  // is_video
  // preview_image
  // publication_date
  // source_link
  // source_name
  // title


  onMount(() => {
    request('get', 'media-publications/')
      .then((data) => {
        publications = data
      })
      .catch(error => {
        console.log(error)
      })
  })
</script>

<section>
    <h2 class="container">CODIFY в медиа</h2>
    <div class="media-box container">
        {#each [...publications] as publication}
            <a class="media-card" href={publication.source_link} target="_blank">
                <div class="image-container">
                    <img src={publication.preview_image} alt="preview">
                    {#if publication.is_video}
                        <div class="video-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C11.7565 0 7.68687 1.68573 4.68629 4.68635C1.68571 7.68696 0 11.7567 0 16.0002C0 20.2437 1.68571 24.3134 4.68629 27.314C7.68687 30.3146 11.7565 32.0004 16 32.0004C20.2435 32.0004 24.3131 30.3146 27.3137 27.314C30.3143 24.3134 32 20.2437 32 16.0002C32 11.7567 30.3143 7.68696 27.3137 4.68635C24.3131 1.68573 20.2435 0 16 0ZM12.9009 8.61549C13.0473 8.60958 13.1909 8.6563 13.3058 8.74718L21.9212 15.5165C21.9944 15.5741 22.0536 15.6475 22.0943 15.7313C22.135 15.8151 22.1562 15.907 22.1562 16.0002C22.1562 16.0933 22.135 16.1853 22.0943 16.2691C22.0536 16.3528 21.9944 16.4263 21.9212 16.4839C19.0498 18.7399 16.176 20.9947 13.3058 23.2507C13.2149 23.323 13.1054 23.368 12.99 23.3806C12.8746 23.3933 12.758 23.373 12.6536 23.3221C12.5492 23.2713 12.4613 23.192 12.4001 23.0933C12.3389 22.9946 12.3069 22.8807 12.3077 22.7646V9.23088C12.3077 8.89857 12.5698 8.62902 12.9009 8.61549Z" fill="white"/>
                        </svg>
                        </div>

                    {/if}
                </div>
                <div class="card-info">
                    <p class="sourse">{publication.source_name}</p>
                    — <span> {moment(publication.publication_date, 'YYYY-MM-DD').format('MMMM YYYY')}</span>
                </div>
                <h6>{publication.title}</h6>
            </a>
        {/each}

    </div>
</section>

<style lang="scss">
  section {
    overflow: hidden;
  }
    .media-box {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 40px 20px;
      @media (max-width: 768px) {
        display: flex;
        overflow: auto;
        gap: 10px;
        width: 100% !important;
        max-width: unset !important;
        padding: 0 5vw 20px;
      }
    }
    .media-card {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
      flex-shrink: 0;
      @media (max-width: 768px) {
        gap: 10px;
        width: 90vw;
        max-width: 400px;
      }
      & .image-container {
        position: relative;
        aspect-ratio: 392/200;
        border-radius: 10px;
        overflow: hidden;
        & .video-box {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          user-select: none;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
        }
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      & .card-info {
        display: flex;
        gap: 5px;
        line-height: 11px;
        & p {
          line-height: 11px;

          font-size: 16px;
          color: #009DFF;
        }
        & span {
          line-height: 11px;
          font-size: 16px;
          text-transform: capitalize;
        }
      }
      & h6 {
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        line-height: 130%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
</style>