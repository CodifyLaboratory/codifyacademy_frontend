<script>
    import { onMount } from 'svelte';
    import { PaginationNav } from 'svelte-paginate'
    import { texts } from '../../localization'
    import {language} from '../../stores'
    import Loading from '../../components/ui/loading.svelte'
    import CardForEvents from '../../components/ui/Cards/CardForEvents.svelte';
    import axios from 'axios';

    let activeLang = 'ru'
    let text = texts[activeLang]
    let dataEvents
    let activeBtn = 0 
    let isLoading = false
    let currentFilter = ''
    async function fetchEvents(page, filter=0) {
      axios
        .get(`https://codify.home.kg/${activeLang}/api/publications/?page=${page}${filter? `&type=${filter}` : ''}`)
        .then(({ data }) => {
          dataEvents = data
          console.log
          isLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    }

    language.subscribe(lang => {
      activeLang = lang
      text = texts[activeLang]
      fetchEvents(1)
    })

  function filter(tab) {
    activeBtn = tab
    isLoading = true
    if (!tab) {
      currentFilter = ''
    } else if(tab === 1){
      currentFilter = "Event"
    } else if (tab === 2) {
      currentFilter = "News"
    }
    fetchEvents(1, currentFilter)
  }
  
  function fetchPage(page){
    isLoading = true
    window.scrollTo(0, 0)
    fetchEvents(page, currentFilter)
  }
  onMount(()=> {
    fetchEvents(1)
  })
  </script>

<svelte:head>
  <title>Codify Academy | IT - курсы программирования в Ташкенте</title>
  <meta name="description" content="" />
  <meta
    name="keywords"
    content="курсы программирования ташкент, школа программирования, курсы разработки, IT курсы в Ташкенте"
  />
  <meta property="og:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    property="og:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="og:image" content="https://codifylab.uz/first-image.jpg" />
  <meta property="og:image:alt" content="title image of site" />
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="1024" />
  <meta property="og:site_name" content="codifylab.uz" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:type" content="website" />
  <meta property="og:image:secure_url" content="https://codifylab.uz/first-image.jpg" />

  <meta property="twitter:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    property="twitter:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta name="twitter:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    name="twitter:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="twitter:image" content="https://codifylab.uz/first-image.jpg" />
  <meta property="twitter:image:alt" content="title image of site" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Global site tag (gtag.js) - Google Ads: 10891704135 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10891704135"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-10891704135');
  </script>
  
  <!-- Event snippet for Начало оформления покупки conversion page -->
  <script>
    gtag('event', 'conversion', {'send_to': 'AW-10891704135/FLnxCK_zp7gDEMfuyMko'});
  </script>
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '740755837028287');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1"
         src="https://www.facebook.com/tr?id=740755837028287&ev=PageView
&noscript=1"/>
  </noscript>
  <!-- End Facebook Pixel Code -->
</svelte:head>


  {#if !!dataEvents}
    <section class="eventsSection container">
      <h1>{text.eventsPage.h1}</h1>
      <div class="buttons">
        <button class={`eventBtn all ${!activeBtn ? 'active0' : ''}`} on:click={() => filter(0)}
          >{text.buttons.all}</button>
        <button class={`eventBtn events ${activeBtn === 1 ? 'active1' : ''}`} on:click={() => filter(1)}
          >{text.buttons.events}</button>
        <button class={`eventBtn news ${activeBtn === 2 ? 'active2' : ''}`} on:click={() => filter(2)}
          >{text.buttons.news}</button>
      </div>
      {#if isLoading}
        <Loading />
      {:else}
      <div class="eventsBox">
        {#each dataEvents.results as  result}
          <CardForEvents event={result} />
        {/each}
      </div>
      <div class="paginate container">
        <PaginationNav
          totalItems={dataEvents.total_count}
          pageSize={dataEvents.page_size}
          currentPage={dataEvents.current_page}
          limit={1}
          showStepOptions={true}
          on:setPage={(e) => fetchPage(e.detail.page)}
        />
      </div>
      {/if}
    </section>
  {:else}
    <Loading fullHeight />
  {/if}

  <style>
    .paginate {
      display: flex;
      justify-content: center;
      padding-bottom: 50px;
    }
    .paginate :global(.pagination-nav){
      display: flex;
      
    }
    .paginate :global(.option) {
      user-select: none;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      justify-content: center;
      align-items: center;
    }
    .paginate :global(.option.active){
      pointer-events: none;
      cursor: unset;
    }
    .paginate :global(.option.active span) {
      font-size: 20px;
      color: var(--green);
    }
    .paginate :global(.option svg path) {
      fill: white;
      transition: 0.2s all;
    }
    .paginate :global(.option.prev){
      margin-right: 15px
    }
        .paginate :global(.option.next){
      margin-left: 15px
    }
    .paginate :global(.option.prev),
    .paginate :global(.option.next) {
      border: 2px solid white;
      background-color: #070727;
      transition: 0.2s all;
    }
    .paginate :global(.option.disabled) {
      opacity: 0.6;
      pointer-events: none;
      cursor: unset;
      user-select: none;
    }
    .paginate :global(.option.prev:hover),
    .paginate :global(.option.next:hover){
      border: 2px solid var(--green);
      filter: drop-shadow(2px 2px 15px #07ffe23f);
    }
    .paginate :global(.option.prev:hover svg path),
    .paginate :global(.option.next:hover svg path){
      fill: var(--green);
    }
    h1 {
      
    text-align: center;
    margin-bottom: 50px;
    font-weight: 500;

    }
    .eventsBox {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 40px 0;
    }
    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px; 
    }
      .eventBtn {
    border-radius: 10px;
    border: 1px solid;
    background-color: #131315;
    padding: 10px 30px;
    transition: 0.2s all;
  }
  .all {
    border-color: rgba(247, 148, 30, 1);
    filter: drop-shadow(4px 4px 10px #f7951e2f);
  }

  .events {
    border-color: rgba(103, 3, 180, 1);
    filter: drop-shadow(4px 4px 10px rgba(169, 0, 188, 0.199));
  }
  .news {
    border-color: rgba(221, 255, 0, 1);
    filter: drop-shadow(4px 4px 10px #ddff002d);
  }
  .active0 {
    background: rgba(247, 148, 30, 1);
    color: black;
  }
  .active1 {
    background: rgba(103, 3, 180, 1);
  }
  .active2 {
    background: rgba(221, 255, 0, 1);
    color: black;
  }
  @media (max-width: 450px){
    .buttons {
      flex-direction: column;
    }
    .buttons .eventBtn {
      width: 100%;

    }
  }
  </style>