<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })

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
                <button class="button contained desktop">Подобрать курс</button>
                <button class="button contained mobile">Попробовать бесплатно</button>
            </div>
        </div>
        <img class="teens-section-img" src="./assets/images/rocket-main.webp" alt="rocket">
        </div>

    </div>
</section>

<style lang="scss">
  .firstSection {
    @media (max-width: 768px) {
      padding-top: 120px;
    }
  }
    .breadCrumbs {
        display: flex;
        align-items: center;
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
    .firstSection_box {
        display: flex;
        gap: 20px;
      align-items: flex-start;
        justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column-reverse;
      }
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
      @media (max-width: 768px) {
        padding-top: 20px;
        font-size: 32px;
        line-height: 110%;
      }
    }
    p {
        font-size: 24px;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
    .button {
        margin-top: 50px;
      &.desktop {
        @media (max-width: 768px) {
          display: none;
        }
      }
      &.mobile {
        width: 100%;
        margin-top: 20px;
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
    .teens-section-img {
      @media (max-width: 1000px) {
        width: 250px;
      }
      @media (max-width: 768px) {
        width: 70%;
        max-width: 400px;
      }
    }

</style>
