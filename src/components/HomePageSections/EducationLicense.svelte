<script>
    export let type = 'teens'

    const types= {
      teens : {
        first_text: 'CODIFY Академия — это место, где ваш ребенок будет учиться в соответствии с высокими стандартами, утвержденными Министерством Образования Кыргызской Республики.',
        second_text: 'Мы обеспечиваем качественное и проверенное обучение, открывая перед вашим ребенком двери в мир знаний и новых возможностей.'
      },
      main: {
        first_text: 'CODIFY Академия — это место, где вы будете учиться в соответствии с высокими стандартами, утвержденными Министерством Образования Кыргызской Республики.',
        second_text: 'Мы обеспечиваем качественное и проверенное обучение, открывая перед вами двери в мир знаний и новых возможностей.'
      }
    }
</script>

<section class="licenseSection container">
    <h2>Лицензия от Министерства Образования</h2>
    <div class="license_box">
        <div class="text-box">
            <p>{types[type].first_text} </p>
            <p>{types[type].second_text}</p>
            <a href="./assets/images/license.png" target="_blank">

            <button class="button contained">
                Просмотреть лицензию
            </button>
            </a>
        </div>
        <img src="./assets/images/{type === 'main' ? 'main-license.png' : 'teens-license.webp'}" alt="license">
    </div>
</section>

<style lang="scss">
  h2 {
    @media (max-width: 768px) {
      margin-bottom: 10px !important;
    }
  }
  p {
    font-size: 20px;
    max-width: 580px;
    @media (max-width: 768px) {
      font-size: 14px;
      padding-bottom: 0;
      line-height: 130%;
    }
  }
  .license_box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
      grid-template-columns: 100%;

    }
  }
  .text-box {
    display: flex;
    padding-bottom: 40px;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
      padding-bottom: 0;
      gap: 10px
    }
  }
  .button {
    margin-top: 10px;
    min-height: 46px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  img {
    width: 100%;
  }
</style>
