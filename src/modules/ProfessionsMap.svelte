<script>

import FindEducation from "../components/FindEducation/FindEducation.svelte";
</script>

<section class="professions-map container">
    <div class="card test-card">
        <div class="test-card_title">
            <h2>
                Какие специальности будут востребованы в 2024 году?
            </h2>
            <p>
                IT-профессия – это не просто новая работа, это возможность поменять свое мышление, окружение и жизнь. Это новые возможности не только для вас, но и для вашей семьи и детей.
            </p>
        </div>
        <p>
            Мы собрали для вас список актуальных профессий, которые будут востребованы в этом году. Оставьте свой номер телефона и получите карту IT профессий!
        </p>
    </div>
    <FindEducation forMap />
</section>

<style lang="scss">
  .professions-map {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 975px) {
      display: flex;
      flex-direction: column;
    }
  }
  .test-card {
    border: 2px solid #0A244D;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    @media (max-width: 768px) {
      gap: 5px;

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
      line-height: 120%;
      margin-bottom: 10px !important;
      text-align: start;
    }
    & p {
      line-height: 130%;
    }
    @media (max-width: 768px) {
      & h2 {
        font-size: 20px;
        line-height: 24px;

      }
    }
  }
  .test-card_link {
    display: flex;
    align-items: center;
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