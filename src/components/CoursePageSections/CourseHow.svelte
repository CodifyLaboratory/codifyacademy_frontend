<script>
  import { language } from '../../stores'
  import { texts } from '../../localization'
  let activeLang
  language.subscribe(lang => (activeLang = lang))
  let text = texts[activeLang].courseHow
</script>

<section>
  <h2>{text.h2}</h2>
  <div class="CoursePageHow">
    <div class="studyStage">
      <img src="./assets/icons/CoursePage/1.svg" alt="studystage" />
      <b class="coloredText">{text.b1}</b>
      <p>{text.p1}</p>
    </div>

    <div class="studyStage">
      <img src="./assets/icons/CoursePage/2.svg" alt="studystage" />
      <b class="coloredText">{text.b2}</b>
      <p>{text.p2}</p>
    </div>
    <div class="studyStage">
      <img src="./assets/icons/CoursePage/3.svg" alt="studystage" />
      <b class="coloredText">{text.b3}</b>
      <p>{text.p3}</p>
    </div>
    <div class="studyStage">
      <img src="./assets/icons/CoursePage/4.svg" alt="studystage" />
      <b class="coloredText">{text.b4}</b>
      <p>{text.p4}</p>
    </div>
  </div>
</section>

<style>
  h2 {
    text-align: center;
  }
  .CoursePageHow {
    margin: 0 auto;
    width: 95%;
    max-width: 1250px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 335px;
  }
  .studyStage {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 30px;
    background-image: var(--blue-gradient);
    border-radius: 10px;
    width: 289px;
  }
</style>
