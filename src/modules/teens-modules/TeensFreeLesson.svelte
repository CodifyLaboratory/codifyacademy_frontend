<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
import FreeLessonCard from '../../components/free-lesson-card/free-lesson-card.svelte'
  let activeLang = 'ru'
  let text = texts[activeLang].buttons

  language.subscribe(async lang => {
    activeLang = lang
  })

  const description_texts = [
    '📚 Расскажем о процессе обучения',
    '📖 Погрузим в увлекательную теорию',
    '🧩 Поможем сделать первые шаги в освоении новых инструментов',
    '🎯 Поработаем над интересными и интерактивными задачами'
  ]




</script>

<section class="sectionFreeLesson container">
    <h2>Бесплатное пробное занятие</h2>
    <div class="fleeLesson_box">
        <div>

        <p>
            Пробное занятие — это идеальная возможность для вашего ребенка протестировать и выбрать направление обучения. На этом занятии мы сочетаем немного теории с множеством практики, обеспечиваем понимание основ и даем первое представление о курсе:
        </p>
            <div class="description_text-box">

        {#each description_texts as text}
            <span class="description_text">{text}</span>
        {/each}
            </div>

        </div>
<FreeLessonCard />
    </div>
</section>

<style lang="scss">
  p {
    font-size: 20px;
    padding-bottom: 40px;
    max-width: 580px;
    @media (max-width: 768px) {
      font-size: 14px;
      padding-bottom: 0;
    }
  }
    .fleeLesson_box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      justify-content: space-between;
      width: 100%;
      @media (max-width: 768px) {
        grid-template-columns: 100%;

      }
    }
    .description_text-box{
      @media (max-width: 850px) {
        display: none;
      }
    }
    .description_text {
      font-size: 20px;
padding-bottom: 10px;
      display: block;
      &:last-child {
        max-width: 580px;
      }
    }
</style>
