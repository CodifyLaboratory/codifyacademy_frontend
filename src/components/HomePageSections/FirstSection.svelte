<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import FindEducation from "../FindEducation/FindEducation.svelte";
  import FirstSectionBadges from "../first-section-badges/index.svelte";
  import * as animateScroll from "svelte-scrollto";

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })

  function scrollTo() {
    animateScroll.scrollTo({ element: '#study-programs', duration: 1300, offset: -100 })
  }

</script>

<section class="firstSection">
    <img src="./assets/new-first-section-element.png" alt=".">
  <div class="container">
      <div>
        <h1>{texts[activeLang].homePage.h1}</h1>
        <p>{texts[activeLang].homePage.subtitle}</p>
          <FirstSectionBadges />
        <div class="firstSection__buttons">
<!--          <a href={`/courses`}>-->
            <button class="button contained" on:click={scrollTo}>{texts[activeLang].buttons.choseCourse}</button>
<!--          </a>-->
        </div>
      </div>
      <FindEducation />
    </div>
</section>

<style lang="scss">
    .firstSection {
      padding-top: 150px;
        position: relative;
      overflow: hidden;
      @media (max-width: 768px) {
        padding-top: 100px;

      }
      & > img {
        position: absolute;
        top: -30px;
        z-index: -1;
        min-width: 100%;
        right: 0;
      }
    }
  .container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  h1 {
    font-size: 48px;
    line-height: 120%;
    max-width: 590px;
    font-weight: 500;
    color: var(--white);
    padding-bottom: 10px;
  }
  p {
      font-size: 24px;
  }
  .button {
    margin-top: 50px;
  }
  @media (max-width: 855px) {
      h1 {
          font-size: 32px;
      }
      p  {
          font-size: 20px;
      }
      .container {
          flex-direction: column;
      }
      .button {
          display: none;
      }
  }
</style>
