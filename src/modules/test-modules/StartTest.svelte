<script>
    export let onClick = () => null
</script>

<div class="start-test_container">
    <div class="start-test card">
        <img src="./assets/images/test/test-start.png" alt="rocket">
        <div class="start-test_info">
            <h1>Найди свой путь в мире IT</h1>
            <p>Не уверены, какая IT-специальность вам подходит? Пройдите наш быстрый и интересный карьерный тест! Он поможет вам понять, к какой области у вас больше всего склонности и интереса — будь то разработка, дизайн, тестирование или управление проектами.</p>
            <span>🎁 Бонус: Получите карту актуальных IT профессий!</span>
        </div>
        <button class="button" on:click={onClick}>
            Пройти тест
        </button>
    </div>
</div>

<style lang="scss">
  .start-test_container {
    flex: 1;
    display: flex;
    padding-bottom: 20px;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    & .start-test {
      max-width: 912px;
      padding: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      @media (max-width: 768px) {
        gap: 20px;
        padding: 30px 15px;
        & img {
          width: 170px;
        }
      }
      & .start-test_info {
        & h1 {
          font-size: 48px;
          text-align: center;
          font-weight: 500;
          line-height: 120%;
          padding-bottom: 10px;
          @media (max-width: 768px) {
            font-size: 28px;
            line-height: 120%;
          }
        }
        & p, span {
          font-size: 20px;
          text-align: center;
          @media (max-width: 768px) {
            font-size: 14px;
          }
        }
        & span {
          display: block;
          width: 100%;
          padding-top: 20px;
          @media (max-width: 768px) {
            padding-top: 10px;
          }
        }
      }
      & button {
        background: white;
        color: #1D1A4B;
      }
    }
  }
</style>