<script>

import FindEducation from "../components/FindEducation/FindEducation.svelte";
</script>

<section class="professions-map container">
    <div class="card test-card">
        <div class="test-card_title">
            <h2>
                Получите карту IT профессий
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

<style>
    .professions-map {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    h2 {
        padding-bottom: 20px;
        margin-bottom: 0 !important;
    }
    .test-card {
        border: 2px solid #0A244D;
        background: transparent;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .test-card p {
        font-size: 16px;
    }

    .test-card_title h2 {
        font-size: 32px;
        font-weight: 500;
        line-height: 120%;
        text-align: start;
    }
    .test-card_title p {
        line-height: 130%;
    }

    @media (max-width: 975px) {
        .professions-map {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 768px) {
        .professions-map {
            display: flex;
            flex-direction: column;
        }
        .test-card {
            gap: 5px;
        }
        .test-card p {
            font-size: 14px;
        }
        .test-card_title h2 {
            font-size: 20px;
            line-height: 24px;

        }
    }
</style>