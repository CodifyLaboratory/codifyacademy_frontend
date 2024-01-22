<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import * as animateScroll from "svelte-scrollto";

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })

  function scrollTo() {
    animateScroll.scrollTo({ element: '#freeLesson', duration: 1300, offset: -100 })
  }

</script>

<section class="firstSection">
    <div class="container">
        <div class="breadCrumbs">
            <a href="/">Главная</a>
            <img src="./assets/icons/chevron-right.svg" alt="chevron-right">
            <p>Детские курсы</p>
        </div>
        <div class="firstSection_box">
        <div>
            <h1>{texts[activeLang].teens.h1}</h1>
            <p>{texts[activeLang].teens.subtitle}</p>
            <div class="firstSection__buttons">
                <button class="button contained desktop" on:click={scrollTo}>Попробовать бесплатно</button>
                <button class="button contained mobile" on:click={scrollTo}>Попробовать бесплатно</button>
            </div>
        </div>
        <img class="teens-section-img" src="./assets/images/rocket-main.webp" alt="rocket">
        </div>

    </div>
</section>

<style>
  .firstSection {
    padding-top: 120px;
  }
  .breadCrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .breadCrumbs p {
    font-weight: 500
  }
  .breadCrumbs p, .breadCrumbs a {
    font-size: 16px;
  }
  .firstSection_box {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding-top: 46px;
    justify-content: space-between;
  }
  h1 {
    padding-top: 50px;
    font-size: 48px;
    line-height: 120%;
    max-width: 590px;
    white-space: pre-wrap;
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
  .button.mobile {
    width: 100%;
    margin-top: 20px;
  }
  @media (max-width: 1000px) {
    .teens-section-img {
        width: 250px;
      }
  }

  @media (max-width: 768px) {
    .firstSection {
        padding-top: 60px;
    }
    .breadCrumbs {
        display: none;
    }
    .firstSection_box {
        flex-direction: column-reverse;
    }
    h1 {
        padding-top: 20px;
        font-size: 32px;
        line-height: 110%;
    }
    p {
        font-size: 20px;
    }
    .button.mobile {
        display: none;
    }
    .button.desktop {
        display: none;
    }
    .teens-section-img {
        width: 70%;
        max-width: 400px;
    }
  }
</style>
