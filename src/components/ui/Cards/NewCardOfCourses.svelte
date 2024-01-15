<script>
    import Badge from "../../badge/Badge.svelte";

    export let course = {}
    console.log('course', course)
</script>



<a href={`/course/${course.id}`} class="card course-card">
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
        <h4>{course.title}</h4>
        <p class="description">
            {course.description}
        </p>
    <div class="card-info">
        <p class="start">
            🕓 Старт — {course.course_start}
        </p>
        <p class="price">
            💸 Стоимость — {course?.discount_price || course?.price} сом в месяц
        </p>
    </div>

</a>

<style lang="scss">
  .card-info{
    margin-top: auto;
    & p {
      font-size: 16px !important;

      @media (max-width: 768px) {
        font-size: 14px !important;
      }
    }
  }
  .start {
    padding-bottom: 5px;
    @media (max-width: 768px) {
      padding-bottom: 0;
    }
  }
  .course-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
      gap: 10px;
    }
    & * {
      text-align: start;
    }
  }

  h4 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    @media (max-width: 768px) {
      font-size: 20px;
    }
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
    @media (max-width: 768px) {
      gap: 5px;
    }
  }

</style>