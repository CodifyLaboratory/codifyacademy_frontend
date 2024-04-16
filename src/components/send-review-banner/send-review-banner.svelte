<script>
export let forTeens = false
</script>
<section class="container">

<div class={`program-card card adult teens-program-card`}>
    <div class="left-block">

        <h3>
            Оставьте свой отзыв!
        </h3>
        <p class="subtitle">
            Поделитесь вашими впечатлениями о CODIFY Practicum с нашим CEO, Динарой Руслан. Ваш отзыв поможет нам стать лучше!
        </p>
        <a class={"mobile-link"} href={'https://wa.me/996708520039'} target="_blank">
            <button class="button">
                Связаться через WhatsApp
            </button>
        </a>
    </div>
    <div class="right-block">
        <img width={'220px'} class="teens-img" src={`/assets/email.png`} alt="rocket">
    </div>

</div>
</section>

<style>
    /*.teens-img {*/
    /*    width: 258px;*/
    /*}*/
    .mobile-link {
        margin-top: 30px;
    }
    .mobile-link button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        min-height: unset;
    }
    .program-card {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        padding: 60px;
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
        max-width: 538px;

    }
    .left-block .subtitle {
        line-height: 150%;
        font-size: 16px;
        max-width: 538px;
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
        align-items: center;
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
            padding: 20px 15px;

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
            align-items: start;
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