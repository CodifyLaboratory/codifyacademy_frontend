<script>
  import { language } from '../../stores'
  let activeLang = 'ru'

  language.subscribe(async lang => {
    activeLang = lang
  })

  const description_texts = [
    '📈 Отслеживайте успехи и прогресс своих детей в реальном времени',
    '📖 Просматривайте выполненные задания и оценки',
    '💬 Получайте обратную связь от менторов',
    '🕓 Полный доступ к учебным материалам и расписанию занятий'
  ]

</script>

<section class="sectionProgress container">
    <h2>Отслеживайте прогресс ребенка  в личном кабинете</h2>
    <div class="progress_box">
        <div>
            <p>
                В Codify Академии каждый ученик получает доступ к своему персональному кабинету в нашей инновационной LMS системе, которая помогает учиться и отслеживать успехи в обучении. Она как школьный журнал, только в интернете:
           </p>
            <div class="description_text-box">

                {#each description_texts as text}
                    <span class="description_text">{text}</span>
                {/each}
            </div>
            <a href="#">
            <button class="button contained">
                Узнать подробнее
            </button>
            </a>
        </div>
        <img src="./assets/images/new_icons/cosmo-monitor.png" alt="monitor">
    </div>
</section>

<style lang="scss">
  p {
    font-size: 20px;
    padding-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 14px;
      padding-bottom: 10px;
    }
  }
  .progress_box {
    padding-top: 10px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
      flex-wrap: wrap-reverse;
    }
  }
  .description_text {
    font-size: 20px;
    padding-bottom: 10px;
    display: block;
    @media (max-width: 768px) {
      font-size: 14px;
      padding-bottom: 5px;
    }
  }
   img {
     @media (max-width: 768px) {
       width: 60%;
     }
   }
   a {
     @media (max-width: 768px) {
       width: 100%;
     }
   }
   .button {
     min-height: 46px;
     margin-top: 40px;
     @media (max-width: 768px) {
       margin-top: 20px;
       width: 100%;
     }
   }
</style>
