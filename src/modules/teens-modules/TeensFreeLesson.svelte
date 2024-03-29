<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
import FreeLessonForm from '../../components/free-lesson-form/free-lesson-form.svelte'
  let activeLang = 'ru'
  let text = texts[activeLang].buttons
    export let comment =''
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

<section id="freeLesson" class="sectionFreeLesson container">
    <div class="fleeLesson_box">
        <div>
            <h2>Не просто учим, а закладываем навыки для успешного будущего</h2>
            <p>
                Пробный урок — это идеальная возможность для вашего ребенка протестировать и выбрать направление обучения:
            </p>
            <div class="description_text-box">

                {#each description_texts as text}
                    <span class="description_text">{text}</span>
                {/each}
            </div>
        </div>
        <FreeLessonForm maxWidth={392} comment={comment}/>
    </div>
</section>

<style>
    h2 {
        text-align: start;
        font-size: 32px;
        margin-bottom: 20px;
    }
    p {
        font-size: 20px;
        padding-bottom: 20px;
        max-width: 580px;
    }
    .fleeLesson_box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-content: space-between;
        width: 100%;
    }
    .description_text {
        font-weight: 400;
        font-size: 20px;
        padding-bottom: 10px;
        display: block;
    }
    .description_text:last-child {
        max-width: 580px;
    }
    @media (max-width: 850px) {
        .description_text-box{
            display: none;
        }
    }
    @media (max-width: 768px) {

        h2 {
            font-size: 24px;
            margin-bottom: 10px !important;
        }
        p {
            font-size: 14px;
            padding-bottom: 0;
        }
        .fleeLesson_box {
            grid-template-columns: 100%;

        }
    }
</style>
