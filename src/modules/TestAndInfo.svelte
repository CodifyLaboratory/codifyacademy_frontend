<script>

import Badge from "../components/badge/Badge.svelte";

const info_cards = [
  {icon: './assets/icons/info/GraduationCap.svg', text: 'Обучение на основе \nлицензии МинОбразования'},
  {icon: './assets/icons/info/Briefcase.svg', text: 'Поддержка на всех этапах трудоустройства'},
  {icon: './assets/icons/info/Star.svg', text: 'Опытные практикующие менторы и наставники'},
  {icon: './assets/icons/info/RocketLaunch.svg', text: 'Индивидуальный подход к каждому студенту'},
]

</script>

<section class="test-info container">
    <div class="card test-card">
        <Badge text="Тест на профориентацию" />
        <div class="test-card_title">
            <h2>
                Какую IT профессию выбрать
            </h2>
            <p>
                Пройдите короткий тест и откройте для себя направление, которое лучше всего соответствует вашим навыкам и интересам.
            </p>
        </div>
        <p>
            🕓 Время прохождения — 3 минуты
        </p>
        <a href="/test" class="test-card_link">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16H27" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square" stroke-linejoin="round"/>
                <path d="M19 7L28 16L19 25" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square"/>
            </svg>
            <p>Пройти тест</p>
        </a>
    </div>
    <div class="card test-card telegram-card">
        <Badge text="Телеграм-канал Job CODIFY" />
        <div class="test-card_title">
            <h2>
                🚀 Начните свой IT-путь с CODIFY
            </h2>
            <p>
                Подпишитесь на наш телеграм-канал Job CODIFY и откройте для себя мир актуальных IT-вакансий. Оставайтесь в курсе последних требований, зарплат и возможностей в IT-индустрии.
              </p>
        </div>
        <a href="https://t.me/codifynews" class="test-card_link">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16H27" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square" stroke-linejoin="round"/>
                <path d="M19 7L28 16L19 25" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square"/>
            </svg>
            <p>Подписаться на Job CODIFY</p>
        </a>
    </div>
</section>

<style lang="scss">
  .test-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 975px) {
      display: flex;
      flex-direction: column;
    }
  }
  .telegram-card {
    border: 2px solid #0A244D;
    background: transparent;
  }
    .test-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      @media (max-width: 768px) {
        gap: 15px;

      }
       & p {
         font-size: 16px;
         @media (max-width: 768px) {
           font-size: 14px;
         }
       }
    }
    .test-card_title {
      & h2 {
        font-size: 32px;
        font-weight: 400;
        line-height: 46px;
        margin-bottom: 10px !important;
        text-align: start;
      }
      & p {
        line-height: 130%;
      }
      @media (max-width: 768px) {
        & h2 {
          font-size: 20px;
          line-height: 32px;

        }
      }
    }
    .test-card_link {
      display: flex;
      align-items: center;
      margin-top: auto;
      gap: 5px;
      @media (max-width: 768px) {
        & svg {
          width: 24px;
          height: 24px;
        }
      }
      & p {
        font-size: 18px;
        color: #009DFF;
        font-weight: 500;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
    .info-cards {
      padding: 15px;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      @media (max-width: 768px) {
        grid-template-columns: 100%;
      }
      & .info-card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        & p {
        white-space: pre-wrap;
          line-height: 130%;
        }
        @media (max-width: 768px) {
          flex-direction: row;
          align-items: center;
          & img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
</style>