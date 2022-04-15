<script>
  import { language } from '../../stores'
  import { texts } from '../../localization'
  import * as animateScroll from 'svelte-scrollto'

  export let course
  let activeLang
  language.subscribe(lang => (activeLang = lang))
  let text = texts[activeLang]

  function consultation() {
    animateScroll.scrollTo({ element: '#enroll', duration: 1300, offset: -100 })
  }
</script>

<section class="CoursePageWhy container">
  <div class="why_info">
    <h2>{text.courseWhy.h2} {course.title}?</h2>
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
  <!-- COURSE PRICE -->
  <div class="coursePrice">
    <h3>{text.courseWhy.h3}</h3>
    <hr />
    <div class="price">
      <div>
        <h6>{course.discount_price || course.price} {text.courseWhy.som}</h6>
        {#if course.special_offer}
          <p class="oldPrice">{course.price} {text.courseWhy.som}</p>
        {/if}
      </div>
      <p>{text.courseWhy.payment}</p>
    </div>
    <hr />
    <div class="info_and_offer">
      <div class="price_info">
        <p><strong>{text.courseWhy.start}</strong> {course.course_start}</p>
        <p>
          <strong>{text.courseWhy.col}</strong>
          {course.seats_left}
          {course.seats_left === 1
            ? text.courseWhy.mesto
            : activeLang === 'ru' && course.seats_left > 1 && course.seats_left < 5
            ? text.courseWhy.mesta
            : text.courseWhy.mest}
        </p>
      </div>
      <div class="specialOffer">
        <p id="specialOffer">{course.special_offer_text}</p>
      </div>
    </div>

    <button class="button contained" on:click={consultation}>{text.buttons.enroll}</button>
  </div>
</section>

<style>
  .info_and_offer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 20px;
    column-gap: 10px;
  }
  .specialOffer {
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9dff00;
    border-radius: 20px;
  }
  #specialOffer {
    font-weight: 600;
    font-size: 14px;
    color: var(--blue);
  }

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
    gap: 30px 20px;
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
    position: relative;
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
  .info_and_offer {
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

  @media (max-width: 1024px) {
    .CoursePageWhy {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 550px) {
    .coursePrice {
      min-width: auto;
      display: flex;
      flex-direction: column;
      height: auto;
    }
    .coursePrice > .button {
      margin: 0 auto;
    }
  }
</style>
