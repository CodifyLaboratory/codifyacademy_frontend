<script>
  import { language } from '../../stores'
  import FreeLessonCard from "../../components/free-lesson-card/free-lesson-card.svelte";
  import TeensFirstSectionBadges from "../../components/teens-first-section-badges/index.svelte";
  let activeLang = 'ru'
  export let course = {}

  language.subscribe(lang => {
    activeLang = lang
  })

</script>

<section class="firstSection">
    <div class="container">
        <div class="breadCrumbs">
            <a href="/">Главная</a>
            <img src="./assets/icons/chevron-right.svg" alt="chevron-right">
            <a href="/teens">Детские курсы</a>
            <img src="./assets/icons/chevron-right.svg" alt="chevron-right">
            <p>{course.title}</p>
        </div>
        <div class="teens-first-sections_box">
            <div class="left_box">
            <TeensFirstSectionBadges course={course} />
            <h1>{course.title}</h1>
                <p class="description">{course.short_description}</p>
                <p class="mobile-description">{course.mobile_short_description?.join(', ')}</p>
            <div class="bonuses">
                {#each course?.additional_details || [] as text}
                    <span class="bonus">{text}</span>
                {/each}
            </div>
                <a href={`#consultation`}>
                    <button class="button contained">Получить консультацию</button>
                </a>

        </div>
            <FreeLessonCard maxWidth={392} />
        </div>

    </div>
</section>

<style lang="scss">
  .firstSection {
    padding-top: 120px;
  }
  .description {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    max-width: 722px;
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .mobile-description {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
    .teens-first-sections_box {
        display: flex;
        gap: 20px;
        justify-content: space-between;
      align-items: center;
    }
    .breadCrumbs {
        display: flex;
        align-items: center;
      padding-bottom: 70px;
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
    .left_box {
      display: flex;
      flex-direction: column;
      gap: 30px;
       & .button {
         min-height: 46px;
       }

      @media (max-width: 768px) {
        gap: 10px;
      }
    }
    h1 {
        font-size: 48px;
        line-height: 120%;
        font-weight: 500;
        color: var(--white);
    }
    p {
        font-size: 24px;
    }
  .bonuses {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
      gap: 5px;
    }
  }
  .bonus {
    text-align: start;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 14px;

    }
  }
    @media (max-width: 855px) {
        h1 {
            font-size: 32px;
        }
        p  {
            font-size: 20px;
        }
        .teens-first-sections_box {
            flex-direction: column;
        }
        a {
            display: none;
        }
    }
</style>
