<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import FindEducation from "../FindEducation/FindEducation.svelte";
  import FirstSectionBadges from "../first-section-badges/index.svelte";

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })

</script>

<section class="firstSection">
  <div class="container">
      <div>
        <h1>{texts[activeLang].homePage.h1}</h1>
        <p>{texts[activeLang].homePage.subtitle}</p>
          <FirstSectionBadges />
        <div class="firstSection__buttons">
          <a href={`${activeLang}/courses`}>
            <button class="button contained">{texts[activeLang].buttons.choseCourse}</button>
          </a>
        </div>
      </div>
      <FindEducation />
    </div>
</section>

<style>
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
