<script>

import InstaReviews from "./InstaReviews.svelte";
</script>

<section class="happy-students">
    <div class="container">
        <h2>
            Студенты CODIFY довольны обучением
        </h2>
    </div>
    <div class="happy-students_box container">
        <div class="percent-block">
            <b class="coloredText">82%</b>
            <p>студентов отмечают, что CODIFY помог им освоить новые навыки</p>
        </div>
        <div class="percent-block">
            <b class="coloredText">75%</b>
            <p>будут рекомендовать Codify своим друзьям и знакомым</p>
        </div>
    </div>
    <InstaReviews type="main" />
</section>

<style lang="scss">
  .happy-students {
    & .insta-section {
      padding-top: 30px !important;
    }
  }
    .happy-students_box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      @media (max-width: 1000px) {
        grid-template-columns: 100%;
      }
    }
    .percent-block {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 30px 0;

      & b {
        font-size: 64px;
      }
      & p {
        max-width: 409px;
        font-size: 24px;
        font-weight: 400;
        line-height: 120%;
      }
      @media (max-width: 768px) {
        padding: 0;
        & b {
          font-size: 36px;
        }
        & p {
          font-size: 18px;
        }
      }
    }
</style>