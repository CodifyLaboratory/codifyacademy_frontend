<script>
  export let cardInfo
  import { language } from '../../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))

  function currentStydyFormat(studyFormat) {
    if (activeLang === 'ru') {
      if (studyFormat.includes('/')) {
        return studyFormat.split('/').join('/\n')
      } else {
        return studyFormat
      }
    } else {
      return studyFormat
    }
  }
</script>

<div class="cardForCourses">
  <div class="card-icon">
    <img src={`./assets/icons/CardForCourses/${cardInfo.icon}`} alt={cardInfo.title} />
  </div>
  <div class="cardCircle" />

  <b>{cardInfo.title}</b>
  <hr />
  <div class="cardInformation">
    <div class="cardInformation__block">
      <img src="./assets/icons/CardForCourses/clock.png" alt="clock" />
      <p>{cardInfo.duration}</p>
    </div>
    <div class="cardInformation__block">
      <img src="./assets/icons/CardForCourses/Business.png" alt="Business" />
      <p style={activeLang === 'ru' ? 'white-space: pre-line;' : ''}>{currentStydyFormat(cardInfo.study_format)}</p>
    </div>
  </div>
</div>

<style>
  .cardForCourses {
    width: 270px;
    border-radius: 10px;
    background-image: var(--blue-gradient);
    position: relative;
    padding: 30px 20px;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s all;
  }
  .cardForCourses:hover {
    box-shadow: 4px 8px 10px rgba(0, 157, 255, 0.2);
  }
  .cardForCourses:active {
    box-shadow: 4px 8px 10px rgba(0, 157, 255, 0.2);
    background-color: var(--blue-main);
  }
  .cardForCourses:hover .card-icon {
    transform: scale(1.3);
  }
  .cardCircle {
    position: absolute;
    border: 1px solid var(--blue);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: none;
    background-color: rgb(16 16 26);
    width: 100px;
    height: 50px;
    top: 0;
  }
  .card-icon {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: 0.3s all;
  }
  b,
  p {
    white-space: nowrap;
  }
  hr {
    width: 90%;
    margin-bottom: 40px;
  }
  .cardInformation {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  .cardInformation__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>
