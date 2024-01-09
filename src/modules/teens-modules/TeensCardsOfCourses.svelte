<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import {request} from "../../api";
  import TeensCardForCourses from "../../components/ui/Cards/TeensCardForCourses.svelte";

  let length = 4
  let activeBtn = 0
  let activeLang = 'ru'
  let currentCards = []
  let text = texts[activeLang].buttons

  language.subscribe(async lang => {
    activeLang = lang
    request('get', 'children-courses/')
      .then((data) => {
        currentCards = data || []
        filter(0)
        if (length && data.length > length) {
          currentCards.length = length
        }
      })
  })




  function filterCards(age_category) {
    request('get', 'children-courses/', {age_category})
      .then((data) => {
        currentCards = data || []
        if (length && data.length > length) {
          currentCards.length = length
        }
      })
  }
  function filter(tab) {
    activeBtn = tab
    if (!tab) {
      filterCards()
    } else if (tab === 1) {
      filterCards('children')
    } else if (tab === 2) {
      filterCards('teens')
    }
  }

</script>

<section class="sectionCourses">
    <h2 class="container">{texts[activeLang].homePage.h2.courses}</h2>
    <div class="tabs-box">

    <div class="sectionCourses__buttons">
        <button class={`buttonCourse allCourses ${!activeBtn ? 'active0' : ''}`} on:click={() => filter(0)}
        >Все курсы</button
        >
        <button class={`buttonCourse dev ${activeBtn === 1 ? 'active1' : ''}`} on:click={() => filter(1)}
        >Для детей 7-12 лет</button
        >
        <button class={`buttonCourse design ${activeBtn === 2 ? 'active2' : ''}`} on:click={() => filter(2)}
        >Для подростков 12-17 лет</button
        >
    </div>
    </div>

    <div class="teensCoursesCards container">
        {#each currentCards as card}
            <TeensCardForCourses cardInfo={card} />
        {/each}
    </div>
</section>

<style lang="scss">
    .sectionCourses {
        text-align: center;
    }
    .tabs-box {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    .sectionCourses__buttons {
        display: flex;
        overflow-x: auto;
        gap: 20px;
        padding: 0 5vw 20px;
        @media (max-width: 768px) {
            gap: 5px
        }
    }
    .teensCoursesCards {
      margin-top: 0;
        display: grid;
      grid-template-columns: 1fr 1fr;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }
    .buttonCourse {
        border-radius: 10px;
        border: 1px solid;
        background-color: #131315;
        padding: 10px 30px;
        transition: 0.2s all;
        white-space: nowrap;
        flex-shrink: 0;
    }
    .allCourses {
        border-color: rgba(247, 148, 30, 1);
        filter: drop-shadow(4px 4px 10px #f7951e2f);
        transform: translate3d(0, 0, 0);
    }

    .dev {
        border-color: rgba(103, 3, 180, 1);
        filter: drop-shadow(4px 4px 10px rgba(169, 0, 188, 0.199));
        transform: translate3d(0, 0, 0);

    }
    .design {
        border-color: rgba(221, 255, 0, 1);
        filter: drop-shadow(4px 4px 10px #ddff002d);
        transform: translate3d(0, 0, 0);

    }
    .management {
        border-color: rgba(0, 255, 98, 1);
        filter: drop-shadow(4px 4px 10px #00ff6233);
        transform: translate3d(0, 0, 0);

    }
    .buttonCourse:hover {
        border-color: var(--light-blue) !important;
    }
    .buttonCourse:active {
        transform: scale(0.99);
        border-color: var(--green) !important;
        filter: none !important;
    }
    .sectionCourses .button {
        margin-top: 40px;
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
    .active3 {
        background: rgba(0, 255, 98, 1);
        color: black;
    }
</style>
