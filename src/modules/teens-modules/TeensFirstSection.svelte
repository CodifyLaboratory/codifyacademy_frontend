<script>
  import { language } from '../../stores'
  import * as animateScroll from "svelte-scrollto";
    import FindEducation from "../../components/FindEducation/FindEducation.svelte";
  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })

  function scrollTo() {
    animateScroll.scrollTo({ element: '#licence', duration: 1300, offset: -200 })
  }

  const badges = [
    '📚 Обучили более 2000 студентов от 7 до 17 лет',
    '⭐️ Опытные менторы и обучение на реальных проектах',
    '🔥 Дополнительно получаете уроки английского и шахмат',
    '🚀 Даем навыки, которые нужны в будущем'
  ]

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
            <h1>Академия программирования для детей и подростков</h1>
            <div class="firstSection_badges">
                {#each badges as badge}
                    <p>{badge}</p>
                    {/each}
            </div>
            <div class="bot">
                <img src="/assets/bot.png" alt="bot">
                <div class="dialog_box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M0.754505 0.986786L16.7566 0.535752L13.1973 10.9739L0.754505 0.986786Z" fill="white"/>
                    </svg>
                    У нас есть <span on:click={scrollTo}>Лицензия от Министерства Образования!</span>
                </div>
            </div>
<!--            <div class="firstSection__buttons">-->
<!--                <button class="button contained desktop" on:click={scrollTo}>Попробовать бесплатно</button>-->
<!--&lt;!&ndash;                <button class="button contained mobile" on:click={scrollTo}>Попробовать бесплатно</button>&ndash;&gt;-->
<!--            </div>-->
        </div>
            <FindEducation forTeens />

<!--        <img class="teens-section-img" src="./assets/images/rocket-main.webp" alt="rocket">-->
        </div>

    </div>
</section>

<style>
    .bot {
        display: flex;
        align-items: center;
        gap: 24px;
    }
    .dialog_box {
        border-radius: 100px;
        background: white;
        font-size: 16px;
        color: var(--blue-main);
        line-height: 120%;
        font-weight: 400;
        position: relative;
        padding: 10px 20px;
    }
    .dialog_box > svg {
        position: absolute;
        left: -12px;
        top: 10px;
    }
    .dialog_box > span {
        color: var(--blue-main);

        cursor: pointer;
        text-decoration: underline;
    }
    .firstSection_badges {
        padding-top: 30px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .firstSection_badges p {
        font-size: 20px;
    }
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
    font-size: 48px;
    line-height: 120%;
    max-width: 590px;
    white-space: pre-wrap;
    font-weight: 500;
    color: var(--white);
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
      .bot img {
          width: 50px;
      }
      .dialog_box {
          font-size: 12px;
          padding: 7px 20px;
      }
      .dialog_box > svg {
          left: -10px;
          top: 10px;
      }
      .firstSection_badges {
          padding-top: 20px;
          padding-bottom: 20px;
          gap: 5px;
      }
      .firstSection_badges p {
          font-size: 16px;
      }
    .firstSection {
        padding-top: 60px;
    }
    .breadCrumbs {
        display: none;
    }
    .firstSection_box {
        flex-direction: column;
    }
    h1 {
        font-size: 32px;
        line-height: 110%;
    }
    p {
        font-size: 20px;
    }
    .button.mobile {
        display: none;
    }
    .teens-section-img {
        width: 70%;
        max-width: 400px;
    }
  }
</style>
