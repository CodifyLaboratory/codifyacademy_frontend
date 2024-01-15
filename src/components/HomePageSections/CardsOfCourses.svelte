<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import {request} from "../../api";
  import NewCardOfCourses from "../ui/Cards/NewCardOfCourses.svelte";
  import Badge from "../badge/Badge.svelte";
  export let length = 0
  let activeBtn = 0
  let activeLang = 'ru'
  let courseCards = []
  let currentCards = []
  let text = texts[activeLang].buttons

  language.subscribe(async lang => {
    activeLang = lang
    await request('GET', 'courses/')
            .then((data) => {
              courseCards = data
              currentCards = data
              filter(0)
              if (length && courseCards.length > length) {
                currentCards.length = length
              }
            })
  })



  function filterCards(type) {
    return courseCards.filter(card => card.study_area === type)
  }
  function filter(tab) {
    activeBtn = tab
    if (!tab) {
      currentCards = courseCards
    } else if (tab === 1) {
      currentCards = filterCards('Development')
    } else if (tab === 2) {
      currentCards = filterCards('Design')
    } else if (tab === 3) {
      currentCards = filterCards('Management')
    }
  }
</script>

<section class="sectionCourses container">
  <div class="breadCrumbs">
    <a href="/">Главная</a>
    <img src="./assets/icons/chevron-right.svg" alt="chevron-right">
    <p>Взрослые курсы</p>
  </div>
  <h1>Курсы для вашего профессионального роста</h1>
  <div class="sectionCourses__buttons">
    <button class={`buttonCourse allCourses ${!activeBtn ? 'active0' : ''}`} on:click={() => filter(0)}
      >{texts[activeLang].buttons.allCourses}</button
    >
    <button class={`buttonCourse dev ${activeBtn === 1 ? 'active1' : ''}`} on:click={() => filter(1)}
      >{texts[activeLang].buttons.dev}</button
    >
    <button class={`buttonCourse design ${activeBtn === 2 ? 'active2' : ''}`} on:click={() => filter(2)}
      >{texts[activeLang].buttons.design}</button
    >
    <button class={`buttonCourse management ${activeBtn === 3 ? 'active3' : ''}`} on:click={() => filter(3)}
      >{texts[activeLang].buttons.management}</button
    >
  </div>
  <div class="coursesCards">
    <div class="card test-card">
      <Badge text="Тест на профориентацию" />
      <div class="test-card_title">
        <h2>
          Какую IT профессию выбрать
        </h2>
        <p>
          Пройдите короткий тест и откройте для себя направление, которое лучше всего соответствует вашим навыкам и интересам.
        </p>
      </div>
      <p>
        🕓 Время прохождения — 3 минуты
      </p>
      <a href="/test" class="test-card_link">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16H27" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square" stroke-linejoin="round"/>
          <path d="M19 7L28 16L19 25" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square"/>
        </svg>
        <p>Пройти тест</p>
      </a>
    </div>
    {#each currentCards as card}
      <NewCardOfCourses course={card} />
    {/each}
  </div>
</section>

<style lang="scss">
  .test-card {
    border: 2px solid #0A244D;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    @media (max-width: 768px) {
      gap: 15px;

    }
    & p {
      font-size: 16px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  .test-card_title {
    & h2 {
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      margin-bottom: 10px !important;
      text-align: start;
    }
    & p {
      line-height: 130%;
      text-align: start;
    }
    @media (max-width: 768px) {
      & h2 {
        font-size: 20px;
        line-height: 25px;

      }
    }
  }
  .test-card_link {
    display: flex;
    align-items: center;
    margin-top: auto;
    gap: 5px;
    @media (max-width: 768px) {
      & svg {
        width: 24px;
        height: 24px;
      }
    }
    & p {
      font-size: 18px;
      color: #009DFF;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  .breadCrumbs {
    display: flex;
    align-items: center;
    padding-bottom: 50px;
    gap: 8px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .breadCrumbs p {
    font-weight: 500
  }
  .breadCrumbs p, .breadCrumbs a {
    font-size: 16px;
  }
  h1 {
    text-align: start;
    font-weight: 500;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  .sectionCourses {
    padding-top: 100px;
    text-align: center;
  }
  .sectionCourses__buttons {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: start;
  }
  .coursesCards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
    flex-wrap: wrap;
    margin-top: 50px;
    @media (max-width: 900px) {
      grid-template-columns: 100%;
      gap: 10px;

    }
  }
  .buttonCourse {
    border-radius: 10px;
    border: 1px solid;
    background-color: #131315;
    padding: 10px 30px;
    transition: 0.2s all;
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
  @media screen and (max-width: 950px) {
    .sectionCourses__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
</style>
