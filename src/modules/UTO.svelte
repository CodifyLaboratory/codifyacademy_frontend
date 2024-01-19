<script>

  const info_cards = [
    {
      icon: './assets/icons/info/Star.svg',
      title: '120 часов с менторами',
      text: 'Интенсивное обучение под руководством наших менторов-разработчиков с более чем 5-летним опытом в IT-сфере'
    },
    {
      icon: './assets/icons/info/RocketLaunch.svg',
      title: '320 часов тех поддержки',
      text: 'Помощь и поддержка в решении домашних заданий и ответы на ваши вопросы от нашей команды технических экспертов'
    },
    {
      icon: './assets/icons/info/Briefcase.svg',
      title: '2 часа консультаций',
      text: 'Персональные консультации с нашими HR-специалистами и проектными менеджерами для составления вашего резюме и портфолио'
    },
    {
      icon: './assets/icons/info/HeartStraight.svg',
      title: 'Поддержка CODIFY Community',
      text: 'Менеджеры из CODIFY Community всегда на связи, чтобы помочь вам на каждом этапе обучения и развития'
    },
    {
      icon: './assets/icons/info/Gift.svg',
      title: 'Бонусный курс',
      text: 'Наш эксклюзивный онлайн курс по трудоустройству в качестве дополнительного бонуса к основной программе'
    },
    {
      icon: './assets/icons/info/Coffee.svg',
      title: 'Уютная атмосфера',
      text: 'Наши компьютерные классы и коворкинг созданы для комфортной учебы + уютная кухня с кофе и чаем'
    },
  ]

</script>

<section class="uto-section container">
    <div class="uto-cards">
        {#each info_cards as {icon,title, text}}
            <div class="uto-card">
                <img src={icon} alt={text}>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
  .uto-cards {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 20px;
    @media (max-width: 1315px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 100%;
      gap: 20px;
    }
    & .uto-card {
      display: flex;
      padding: 0 10px;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: 768px) {
        padding: 0;
      }
      & h5 {
        font-size: 24px;
        font-weight: 500;
        padding: 15px 0 5px;
        @media (max-width: 768px) {
          padding: 10px 0 5px;
          font-size: 20px;
        }
      }
      & p {
        white-space: pre-wrap;
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
</style>