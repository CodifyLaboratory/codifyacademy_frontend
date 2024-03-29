<script>
export let forTeens = false
</script>
<section class="container">

<div class={`program-card card adult teens-program-card`}>
    <div class="left-block">

        <h3>
            Карьерный тест: узнайте вашу идеальную IT-профессию
        </h3>
        <p class="subtitle">
            Пройдите короткий тест и откройте для себя направление, которое лучше всего соответствует вашим навыкам и интересам
        </p>
        <p>🕓 Время прохождения — 3 минуты</p>
        <a class={"mobile-link"} href={'/test'}>
            <button class="button contained">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2.8125 9H15.1875" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M10.6875 3.9375L15.75 9L10.6875 14.0625" stroke="white" stroke-width="2" stroke-linecap="square"/>
                </svg>
                Пройти тест
            </button>
        </a>
    </div>
    <div class="right-block">
            <img class="teens-img" src={`/assets/${forTeens ? 'planet_with_satellites'  : 'girl_on_arrow'}.png`} alt="rocket">
    </div>

</div>
</section>

<style>

    .mobile-link {
        margin-top: 30px;
    }
    .mobile-link button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .program-card {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    .program-card:not(.teens-program-card) {
        background: linear-gradient(140deg, rgba(188, 20, 227, 0.10) 0%, rgba(0, 157, 255, 0.10) 100%);

    }
    .program-card > img {
        position: absolute;
        top: 0;
        right: 0;
    }
    .left-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .left-block h3 {
        font-size: 32px;
        font-weight: 500;
        line-height: 130%;
        max-width: 532px;
    }
    .left-block .subtitle {
        line-height: 150%;
        font-size: 20px;
        max-width: 640px;
    }
    .left-block > a {
        display: block;
    }
    .left-block > a button {
    }
    .right-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        min-width: 392px;
    }
    .right-block .course-name {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .right-block .course-name span {
        font-size: 20px;
        font-weight: 500;
    }


    @media (max-width: 1145px) {
        .right-block {
            min-width: 250px;
        }
    }

    @media (max-width: 880px) {
        .teens-img {
            width: 60%;
        }
        .mobile-link {
            display: block !important;
            width: 100%;
        }
        .program-card {
            flex-direction: column;
            align-items: flex-start;
        }
        .teens-program-card {
            flex-direction: column-reverse;
        }
        .teens-program-card button {
            width: 100%;
        }
        .program-card > img {
            display: none;
        }
        .left-block h3 {
            font-size: 20px;
        }
        .left-block .subtitle {
            font-size: 14px;
        }
        .left-block .badges {
            padding-bottom: 0;
        }
        .left-block > a {
            display: none;
        }
        .right-block {
            gap: 10px;
        }
        .right-block .course-name svg {
            width: 16px;
            height: 16px;
        }
        .right-block .course-name span {
            font-size: 14px !important;
        }
    }
</style>