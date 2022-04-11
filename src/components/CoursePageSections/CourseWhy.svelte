<script>
  import { language } from '../../stores'
  export let course
  let activeLang
  language.subscribe(lang => (activeLang = lang))
</script>

<section class="CoursePageWhy container">
  <div class="why_info">
    <h2>Почему {course.title}?</h2>
    <div class="why_grid">
      <div>
        <img src="./assets/icons/CardForCourses/yea.svg" alt="plus" />
        <b class="coloredText">{course.reason_title_1}</b>
        <p>{course.reason_1}</p>
      </div>
      <div>
        <img src="./assets/icons/CardForCourses/yea.svg" alt="plus" />
        <b class="coloredText">{course.reason_title_2}</b>
        <p>{course.reason_2}</p>
      </div>
      <div>
        <img src="./assets/icons/CardForCourses/yea.svg" alt="plus" />
        <b class="coloredText">{course.reason_title_3}</b>
        <p>{course.reason_3}</p>
      </div>
      <div>
        <img src="./assets/icons/CardForCourses/yea.svg" alt="plus" />
        <b class="coloredText">{course.reason_title_4}</b>
        <p>{course.reason_4}</p>
      </div>
    </div>
  </div>
  <div class="coursePrice">
    <h3>Стоимость обучения</h3>
    <hr />
    <div class="price">
      <div>
        <h6>{course.discount_price || course.price} сом/месяц</h6>
        {#if course.special_offer}
          <p class="oldPrice">{course.price} coм/месяц</p>
        {/if}
      </div>
      <p>*Оплату можно вносить частями</p>
    </div>
    <hr />
    <div class="price_info">
      <p><strong>Старт курса:</strong> {course.course_start}</p>
      <p>
        <strong>Осталось:</strong>
        {course.seats_left}
        {course.seats_left === 1 ? 'место' : course.seats_left > 1 && course.seats_left < 5 ? 'места' : 'мест'}
      </p>
    </div>
    <button class="button contained">Записаться на курс</button>
  </div>
</section>

<style>
  .CoursePageWhy {
    display: grid;
    grid-template-columns: auto 514px;
    gap: 10px;
    margin-top: 160px;
  }
  /* for why reasons */
  .why_info h2 {
    text-align: start;
    font-size: 2.175rem;
    margin-bottom: 30px !important;
  }
  .why_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    row-gap: 30px;
  }
  .why_grid > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
    align-items: flex-start;
  }
  .why_grid > div > p {
    font-size: 0.85rem;
  }

  /* for price of courses */
  .coursePrice {
    padding: 40px;
    border-radius: 10px;
    min-width: 514px;
    height: 483px;
    background: var(--blue-gradient);
  }
  hr {
    margin: 30px 0;
  }
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
  }
  h6 {
    font-size: 1.55rem;
    font-weight: 500;
  }
  .price,
  .price_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .price > div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .price > p {
    font-size: 0.85rem;
  }
  .price_info {
    margin-bottom: 50px;
  }
  .price_info > p {
    font-size: 1.25rem;
  }
  .price_info strong {
    font-weight: 500;
  }
  .oldPrice {
    text-decoration: line-through;
  }
</style>
