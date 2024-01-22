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
            <p>будут рекомендовать CODIFY своим друзьям и знакомым</p>
        </div>
    </div>
    <InstaReviews key={'main'} type="main" />
</section>

<style >
    .happy-students .insta-section {
        padding-top: 30px !important;
    }

    .happy-students_box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .percent-block {
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 30px 0;
    }
    .percent-block b {
        font-size: 64px;
    }
    .percent-block p {
        max-width: 409px;
        font-size: 24px;
        font-weight: 500;
        line-height: 120%;
    }
    @media (max-width: 1000px) {
        .happy-students_box {
            grid-template-columns: 100%;
        }
    }
    @media (max-width: 768px) {
        .percent-block {
            padding: 0;
        }

        .percent-block b {
            font-size: 36px;
        }
        .percent-block p {
            font-size: 18px;
        }
    }
</style>