<script>
  import CardForCourses from '../ui/Cards/CardForCourses.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import { onMount } from 'svelte'

  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang].buttons

  let courseCards = []

  onMount(async () => {
    fetch('http://178.62.241.156/ru/api/courses/')
      .then(response => response.json())
      .then(data => {
        courseCards = data
      })
      .catch(error => {
        console.log(error)
      })
  })
</script>

<section class="sectionCourses container">
  <h2>{texts[activeLang].homePage.h2.courses}</h2>
  <div class="sectionCourses__buttons">
    <button class="buttonCourse allCourses">{text.allCourses}</button>
    <button class="buttonCourse dev">{text.dev}</button>
    <button class="buttonCourse design">{text.design}</button>
    <button class="buttonCourse managment">{text.managment}</button>
  </div>
  <div class="coursesCards">
    {#each courseCards as card}
      <CardForCourses cardInfo={card} />
    {/each}
  </div>
  <button class="button">{text.allCourses}</button>
</section>

<style>
  .sectionCourses {
    text-align: center;
  }
  .sectionCourses__buttons {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  .coursesCards {
    display: flex;
    justify-content: center;
    gap: 20px;
    row-gap: 70px;
    flex-wrap: wrap;
    margin-top: 80px;
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
  }

  .dev {
    border-color: rgba(103, 3, 180, 1);
    filter: drop-shadow(4px 4px 10px rgba(169, 0, 188, 0.199));
  }
  .design {
    border-color: rgba(221, 255, 0, 1);
    filter: drop-shadow(4px 4px 10px #ddff002d);
  }
  .managment {
    border-color: rgba(0, 255, 98, 1);
    filter: drop-shadow(4px 4px 10px #00ff6233);
  }
  .buttonCourse:hover {
    border-color: var(--light-blue) !important;
  }
  .buttonCourse:active {
    border-color: var(--green) !important;
    filter: none !important;
  }
  .sectionCourses .button {
    margin-top: 40px;
  }
  @media screen and (max-width: 950px) {
    .sectionCourses__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
</style>
