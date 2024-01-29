<script>

</script>

<section class="test-info container">
    <div class="card test-card">
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

<style>
    .test-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
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
        padding: 60px 30px;
    }
    .test-card p {
        font-size: 16px;
    }
    .test-card_title h2 {
        font-size: 32px;
        font-weight: 500;
        line-height: 46px;
        margin-bottom: 10px !important;
        text-align: start;
    }
    .test-card_title p {
        line-height: 130%;
    }
    .test-card_link {
        display: flex;
        align-items: center;
        margin-top: auto;
        gap: 5px;
    }
    .test-card_link p {
        font-size: 18px;
        color: #009DFF;
        font-weight: 500;
    }



    @media (max-width: 975px) {
        .test-info {
            display: flex;
            flex-direction: column;
        }
    }


    @media (max-width: 768px) {
        .test-card {
            padding: 20px 15px;

        }
        .test-card_title h2 {
            font-size: 20px;
            line-height: 32px;

        }
        .test-card_link svg {
            width: 24px;
            height: 24px;
        }

        .test-card {
            gap: 15px;

        }
        .test-card p {
            font-size: 14px;
        }

        .test-card_link p {
            font-size: 14px;
        }

    }
</style>