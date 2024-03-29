<script>
    export let type = 'teens'

    const types= {
      teens : {
        first_text: 'CODIFY Академия — это место, где ваш ребенок будет учиться в соответствии с высокими стандартами, утвержденными Министерством Образования Кыргызской Республики.',
        second_text: 'Мы обеспечиваем качественное и проверенное обучение, открывая перед вашим ребенком двери в мир знаний и новых возможностей.',
        badges: ['⭐️ Качественное и проверенное обучение', '🔥️ Новейшие методики', '🧑🏻‍💻 Опытные преподаватели', '🤝 Индивидуальный подход к студентам']

      },
      main: {
        first_text: 'CODIFY Академия — это место, где вы будете учиться в соответствии с высокими стандартами, утвержденными Министерством Образования Кыргызской Республики.',
        second_text: 'Мы обеспечиваем качественное и проверенное обучение, открывая перед вами двери в мир знаний и новых возможностей.',
        badges: ['⭐️ Качественное и проверенное обучение', '🔥️ Новейшие методики', '🧑🏻‍💻 Опытные преподаватели', '🤝 Индивидуальный подход к студентам']
      }
    }
</script>

<section id="licence" class="licenseSection container">
    <div class="license_box">
        <div class="text-box">
            <h3>Лицензия от Министерства Образования</h3>

            <p>{types[type].first_text} </p>
<!--            <p>{types[type].second_text}</p>-->
            <div class="licenseSection_badges">
                {#each types[type].badges as badge}
                    <p>{badge}</p>
                    {/each}
            </div>
<!--            <a href="./assets/images/license.png" target="_blank">-->

<!--            <button class="button contained">-->
<!--                Просмотреть лицензию-->
<!--            </button>-->
<!--            </a>-->
        </div>
        <img src="./assets/images/{type === 'main' ? 'main-license.png' : 'teens-license.webp'}" alt="license">
    </div>
</section>

<style>
    h3 {
        font-size: 32px;
    }
    p {
        font-size: 20px;
        max-width: 580px;
    }
    .license_box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-content: space-between;
        width: 100%;
    }
    .text-box {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
    .button {
        margin-top: 10px;
        min-height: 46px;
    }
    img {
        width: 100%;
    }
    .licenseSection_badges {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media (max-width: 768px) {
        h3 {
            font-size: 24px;
        }
        .licenseSection_badges {
            display: none;
        }
        h2 {
            margin-bottom: 10px !important;
        }
        p {
            font-size: 14px;
            padding-bottom: 0;
            line-height: 130%;
        }
        .license_box {
            grid-template-columns: 100%;

        }
        .text-box {
            padding-bottom: 0;
            gap: 10px
        }
        .button {
            display: none;
        }
    }
</style>
