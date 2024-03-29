<script>

  import * as animateScroll from "svelte-scrollto";

  const badges = [
    'Узнайте способности вашего ребенка',
    'Подберите перпективное направление',
    'Сделайте свой первый проект',
    'Заработайте первые деньги'
  ]

  function scrollTo() {
    animateScroll.scrollTo({ element: '#freeLesson', duration: 1300, offset: -200 })
  }


</script>

<section class="sectionFreeLesson container">
    <div class="fleeLesson_box">
            <div class="description_text-box">
                {#each badges as text, index}
                    <div class="badge_box">
                        <div class="number">{index  + 1}
                            {#if index}
                                <div class="line"></div>
                            {/if}
                        </div>
                        <p>{text}</p>
                    </div>
                {/each}
            </div>
        <div class="card">
            <img src="/assets/robot-transparent.png" alt="robot">
            <h3>Научим разрабатывать игры, а не только играть в них!</h3>
            <button class="button contained" on:click={scrollTo}>
                Хочу на бесплатный урок
            </button>
        </div>
    </div>
</section>

<style>
    .card {
        overflow: hidden;
        position: relative;
        padding: 60px;
        background: linear-gradient(140deg, rgba(0, 157, 255, 0.20) 0%, rgba(188, 20, 227, 0.20) 100%);
    }
    .card img {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    h3 {
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        padding-bottom: 30px;
    }
    .description_text-box{
       display: flex;
        align-self: center;
        flex-direction: column;
        gap: 28px;
    }
    h2 {
        text-align: start;
        font-size: 32px;
        margin-bottom: 20px;
    }
    p {
        font-size: 24px;
        max-width: 580px;
    }
    .fleeLesson_box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-content: space-between;
        width: 100%;
    }
    .badge_box {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .badge_box .number {
        flex-shrink: 0;
        background: #111119;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border: 2px solid  var(--blue-main);
        border-radius: 50%;
        color: var(--blue-main);
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .badge_box .number .line {
        position: absolute;
        z-index: -1;
        top: -98%;
        width: 2px;
        height: 30px;
        background: var(--blue-main);
        left: 0;
        right: 0;
        margin: auto;
    }
    @media (max-width: 1150px) {
        .fleeLesson_box {
            grid-template-columns: 530px 1fr;
        }
        .card {
            padding: 30px;
        }
    }
    @media (max-width: 990px) {
        .fleeLesson_box {
            grid-template-columns: 100%;

        }
    }
    @media (max-width: 768px) {
        .description_text-box{
            gap: 20px;
        }
        .card {
            padding: 20px 15px;
        }
        h3 {
            font-size: 20px;
            padding-bottom: 15px;
        }
        p {
            font-size: 16px;
        }
    }
</style>
