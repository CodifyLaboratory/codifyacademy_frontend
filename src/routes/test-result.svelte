<script>
    import {onMount} from "svelte";
    import NewCardOfCourses from "../components/ui/Cards/NewCardOfCourses.svelte";
    import {goto} from "@sapper/app";

    let test_result = { result : []}
    let it_map_downloaded = false
    onMount(() => {
      if(localStorage.getItem('test-result')) {
        test_result =JSON.parse(localStorage.getItem('test-result'))
      }
      else {
        goto('/test')
      }
    })
</script>


<div class="test-result-page">
    <div class="test-header container">
        <a href="/">
            <img width="136px" height="28px" src="./assets/icons/logo.webp" alt="logo" />
        </a>
        <p>Карьерный тест</p>
    </div>
    {#if !it_map_downloaded}
    <div class="it-map">
        <div class="container">
        <p class="it-map-text">🎉 Поздравляем с завершением теста! Карта актуальных IT-профессий уже ждёт вас.</p>
            <a href="https://codifylab.com/ru/api/download-it-prof-map/" on:click={() => it_map_downloaded = true}>

        <button class="button light-blue">Получить карту</button>
            </a>

        </div>
    </div>
        {/if}

    <div class="container test-result-container">
        {#if test_result.result?.length > 1}
            <h2 class="double-result-title">Двойной талант: вам подходят сразу две специальности!</h2>
        {/if}
        <div class="test-result">
            {#each test_result.result as result_card}
                <div class="result-card card {test_result.result?.length > 1 ? 'double' : ''}">
                    {#if test_result.result?.length === 1}
                        <h3>Ваша идеальная IT-специальность</h3>
                    {/if}
                        <img src={result_card.icon_url} alt="result-icon">
                        <h1>{result_card.profession}</h1>
<!--                        <Badge text={`Совпадение — ${result_card.score}%`} />-->
                    <p>{result_card.description}</p>
                </div>
            {/each}
        </div>

        <section>
            <h2>
                Вам идеально подойдет наш курс
            </h2>
            <div class="result-courses_box">
                {#if test_result.top_professions_courses}
                {#each test_result.top_professions_courses as course}
                    <div class="test-result_course">
                        <NewCardOfCourses course={course} />
                        <div class="card description-card">
                            <p>{course.profession_description}</p>
                        </div>
                    </div>
                {/each}
                {/if}
            </div>
        </section>
        <section>
            <h2>
                Другие подходящие специальности
            </h2>
            <div class="result-courses_box">
                {#if test_result.second_profession_courses}
                    {#each test_result.second_profession_courses as course}
                        <div class="test-result_course">
                            <NewCardOfCourses course={course} />
                            <div class="card description-card">
                                <p>{course.profession_description}</p>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </section>
    </div>


    <p class="test-footer">© 2023 Codify Academy. All Rights Reserved</p>
</div>

<style>
    .it-map-text {
        font-size: 16px;
    }
    h2 {
        font-size: 32px;
    }
    .double-result-title {
        text-align: center;
    }
    .result-courses_box {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .result-courses_box .test-result_course {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 20px;
    }
    .result-courses_box .test-result_course > .description-card {
        background: transparent !important;
        border: 2px solid #0A244D;
    }
    .result-courses_box .test-result_course > .description-card p {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

    }
    .test-result {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
    .result-card {
        padding: 60px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    .result-card h3 {
        font-size: 24px;
        line-height: 120%;
        padding-bottom: 20px;
    }
    .result-card img {
        height: 220px;
        padding-bottom: 20px;
    }
    .result-card h1 {
        font-size: 48px;
        font-weight: 500;
        text-align: center;
        line-height: 120%;
    }
    .result-card > p {
        text-align: center;
        padding-top: 20px;
        font-size: 20px;
        line-height: 120%;
    }
    .result-card.double {
        padding: 60px 30px;
    }
    section {
        padding-top: 80px;
    }
    h2 {
        text-align: start;

    }
    .it-map {
        background: linear-gradient(130deg, #07294E -21.19%, rgba(7, 41, 78, 0.20) 112.21%);
        position: sticky;
        top: 93px;
    }
    .it-map .container {
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .light-blue {
        padding: 15px 30px;
        min-height: 42px;
        background: #009DFF;
        line-height: 11px;
        font-size: 16px;
    }
    .test-result-container {
        flex: 1;
        max-width: 912px;
        margin: 0 auto;
        padding: 40px 0;
    }
    .test-footer {
        padding: 15px 0;
        width: 100%;
        text-align: center;
    }
    .test-result-page {
        min-height: 100dvh;
    }
    .test-header {
        padding-top: 30px;
        padding-bottom: 30px;
        position: sticky;
        top: 0;
        background: #111119;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        .it-map-text {
            font-size: 12px;
        }
        h2 {
            font-size: 20px;
        }
        .result-courses_box .test-result_course {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .result-courses_box .test-result_course > .description-card p {
            font-size: 14px;
        }
        .test-result {
            grid-template-columns: 1fr;
        }
        .result-card {
            padding: 30px 15px !important;
            gap: 20px;
        }
        .result-card h3 {
            font-size: 16px;
            padding-bottom: 0;
        }
        .result-card img {
            padding-bottom: 0;
            height: 150px;
        }
        .result-card h1 {
            font-size: 28px;
        }
        .result-card > p {
            padding-top: 0;
            font-size: 14px;
        }

        section {
            padding-top: 40px;
        }
        .it-map {
            top: 52px;
        }
        .light-blue {
            font-size: 12px;
            line-height: 8px;
            padding: 10px 15px;
        }

        .test-header {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        section h2 {
            margin-bottom: 20px !important;
        }
        .test-header p {
            display: none;
        }
    }
</style>