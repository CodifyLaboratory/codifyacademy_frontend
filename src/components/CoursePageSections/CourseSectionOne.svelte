<script>
  export let course
  import { language } from '../../stores'
  import { texts } from '../../localization'

  let activeLang = 'ru'

  let text = texts[activeLang].courseFirst

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang].courseFirst
  })
  $: and = activeLang === 'ru' ? ' и ' : activeLang === 'en' ? ' and ' : ' и '
  function restyle(e) {
    let result
    if (e.includes('/')) {
      result = e.split('/').join(and)
      return result
    } else {
      return e
    }
  }
</script>

{#if course}
  <section class="CoursePage_sectionOne">
    <div class="courseTitle container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
    <div class="image_and_info">
      <img class="courseBg" src={course.image || './assets/images/course-bg.webp'} alt="course-bg" />
      <div class="fullInfo container">
        <div class="courseInfo">
          <div>
            <img src="./assets/icons/CardForCourses/business1.svg" alt="Business" />
          </div>
          <p>{`${restyle(course.study_format)}\n${text.format}`}</p>
        </div>
        <div class="courseInfo">
          <div>
            <img src="./assets/icons/CardForCourses/clock1.svg" alt="clock" />
          </div>
          <p>{`${text.duration} ${course.duration}`}</p>
        </div>
        <div class="courseInfo">
          <div>
            <img src="./assets/icons/infinity.svg" alt="clock" />
          </div>
          <p>{text.docs}</p>
        </div>
        <div class="courseInfo">
          <div>
            <img src="./assets/icons/Advantage/Entrepreneur.svg" alt="Entrepreneur" />
          </div>
          <p>{text.internship}</p>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  .CoursePage_sectionOne {
    padding-top: 140px;
    text-align: center;
  }

  h1 {
    margin-bottom: 20px;
  }
  .CoursePage_sectionOne > .container > p {
    max-width: 1010px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .image_and_info {
    width: 100%;
    height: 300px;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .fullInfo {
    width: 80%;
    max-width: 980px;
    height: 300px;
    display: flex;
    justify-content: space-between;
  }
  .courseBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    object-fit: cover;
    z-index: -1;
    border-bottom: 2px solid var(--blue);
  }
  .courseInfo {
    position: relative;
    bottom: -231px;
    width: 176px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .courseInfo > div {
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-image: var(--primary-bg);
    border: 2px solid var(--blue);
  }
  .courseInfo > p {
    white-space: pre-line;
  }
  @media (max-width: 950px) {
    .image_and_info {
      height: auto;
      min-height: 300px;
      margin-bottom: 310px;
    }
    .fullInfo {
      width: 90%;
      position: relative;
      top: 340px;
      /* flex-direction: column; */
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
      height: auto;
      align-items: flex-start;
    }
    .courseInfo {
      width: auto;
      bottom: 0;
      flex-direction: row;
      gap: 20px;
      justify-content: flex-start;
      align-items: center;
    }
    .courseInfo > div {
      width: 100px;
      height: 100px;
    }
  }
</style>
