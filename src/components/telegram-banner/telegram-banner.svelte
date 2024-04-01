<script>
  export let type = 'pro_it'
    export let forTeens = false
  const types= {
    pro_it: {
      image: '/assets/pro_it_mockup.png',
      bg: '/assets/pro_it_BG.svg',
      teens_bg: '/assets/pro_it_BG_teens.png',
      title: 'Telegram-канал “Pro IT с Диной Руслан”',
      subtitle: 'Присоединяйтесь к Telegram-каналу Дины Руслан и получайте ежедневные обновления с полезными ссылками и свежими новостями из мира IT',
      link: 'https://t.me/letscodify',
      btn_text: 'Присоединиться'
    },
    job: {
      image: '/assets/job_codify_mockup.png',
      bg: '/assets/job_codify_BG.svg',
  teens_bg: '/assets/job_codify_BG.png',
      title: 'Job CODIFY — telegram-канал c актуальными вакансиями',
      subtitle: 'Подпишитесь на телеграм-канал Job CODIFY и откройте для себя мир актуальных IT-вакансий. Оставайтесь в курсе последних требований, зарплат и возможностей в IT-индустрии!',
      link: 'https://t.me/codifynews',
      btn_text: 'Хочу получать вакансии'
    },
  }
  const {bg, image, title, subtitle, link, btn_text, teens_bg}= types[type]
</script>

<section class="container">


<div class={`program-card card adult teens-program-card`}>
    <img class="card-bg" src={forTeens ? teens_bg : bg} alt="bg">

    <div class="left-block">

        <h3>
            {title}
        </h3>
        <p class="subtitle">
            {subtitle}
         </p>
        <a class={"mobile-link"} href={link} target="_blank">
            <button class="button contained">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M6.18794 9.4853L12.509 15.047C12.5821 15.1117 12.6707 15.1562 12.7662 15.1763C12.8617 15.1964 12.9607 15.1913 13.0536 15.1615C13.1465 15.1317 13.2301 15.0783 13.2961 15.0064C13.3621 14.9346 13.4083 14.8468 13.4301 14.7517L16.0739 3.20639C16.096 3.10696 16.0908 3.00338 16.0587 2.9067C16.0266 2.81003 15.9688 2.72388 15.8916 2.65747C15.8143 2.59105 15.7205 2.54686 15.6201 2.52961C15.5197 2.51236 15.4165 2.5227 15.3215 2.55952L2.34185 7.65717C1.82153 7.86108 1.89185 8.62045 2.44028 8.73295L6.18794 9.4853Z" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
                    <path d="M6.1875 9.48594L15.757 2.57422" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
                    <path d="M9.34453 12.2617L7.15078 14.4555C7.07252 14.5349 6.97239 14.5894 6.86313 14.6118C6.75388 14.6342 6.64041 14.6237 6.53717 14.5815C6.43392 14.5393 6.34555 14.4673 6.28329 14.3748C6.22103 14.2822 6.18769 14.1733 6.1875 14.0617V9.48438" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
                {btn_text}
            </button>
        </a>
    </div>
    <div class="right-block">
            <img class="teens-img" src={image} alt="rocket">
    </div>

</div>
</section>

<style>
    .teens-img {
        z-index: 1;
        position: absolute;
        right: 170px;
        height: 310px;
        bottom: 0;
    }
    .card-bg {
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
        z-index: -1;
    }
    .mobile-link {
       margin-top: 30px;
    }
    .mobile-link button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        min-height: auto;
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
    .left-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    .left-block h3 {
        font-size: 32px;
        font-weight: 500;
        line-height: 130%;
        max-width: 537px;
    }
    .left-block .subtitle {
        line-height: 130%;
        font-size: 16px;
        max-width: 537px;
    }
    .left-block .badges {
        padding-top: 10px;
        padding-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .left-block > a {
        display: block;
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
            display: none;
        }
        .mobile-link {
            display: block !important;
            width: 100%;
        }
        .program-card {
            flex-direction: column;
            padding: 20px 15px;
            align-items: flex-start;
        }
        .teens-program-card {
            flex-direction: column-reverse;
        }
        .teens-program-card button {
            width: 100%;
        }
        .program-card > img {
            right: unset;
            left: 60%;
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