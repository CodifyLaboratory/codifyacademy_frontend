<script>
    import Badge from "../../badge/Badge.svelte";

    export let course = {}
    export let forTestResult = false


</script>



<a href={course.redirect_url || `/course/${course.id}`} target={course.redirect_url ? '_blank' : ''} class="card course-card">
    {#if forTestResult}
        <div class="test">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16H27" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square" stroke-linejoin="round"/>
                <path d="M19 7L28 16L19 25" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square"/>
            </svg>
            <p>{`Совпадение — ${course.score}%`}</p>
        </div>
    {/if}
        <div class="card-badges">
            {#if course.special_offer && course.special_offer_text}
                <Badge green text={course.special_offer_text} />
            {/if}
            <Badge text={course.duration} />

            {#if course.study_format?.includes('Онлайн')}
                <Badge text={'Онлайн'} />
            {/if}
            {#if course.study_format?.includes('Офлайн')}
                <Badge text={'Офлайн'} />
            {/if}
        </div>
    <div>

        <h4>{course.title}</h4>
        <p class="description">
            {course.description}
        </p>
    </div>

    <div class="card-info">
<!--        <p class="start">-->
<!--            🕓 Старт — {course.course_start}-->
<!--        </p>-->
        <p class="price">
            💸 Стоимость — {course.redirect_url ? `$${course?.discount_price || course?.price} за курс` : `${course?.discount_price || course?.price} сом в месяц`}
        </p>
    </div>

</a>

<style>
    .test {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .test svg {
        width: 24px;
        height: 24px;
    }
    .test p {
        color: #009DFF;
        font-weight: 500;
        font-size: 14px;

    }

    .card-info{
        margin-top: auto;
    }
    .card-info p {
        font-size: 16px !important;

    }
    .start {
        padding-bottom: 5px;
    }
    .course-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .course-card * {
        text-align: start;
    }

    h4 {
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        padding-bottom: 10px;
    }
    .description {
        text-align: start;
        font-size: 16px;
        font-style: normal;
        line-height: normal;
    }
    .card-badges {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {

        .card-info{
            margin-top: 0;
        }
        .card-info p {
            font-size: 14px !important;
        }
        .start {
            padding-bottom: 0;
        }
        .course-card {
            gap: 15px;
        }

        h4 {
            font-size: 20px;
        }
        .description {
            font-size: 14px;
        }
        .card-badges {
            gap: 5px;
        }
    }
</style>