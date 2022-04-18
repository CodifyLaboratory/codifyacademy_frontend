<script>
  export let cardInfo
  import { language } from '../../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))

  function currentStudyFormat(studyFormat) {
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

<a href={`${activeLang}/course/${cardInfo.id}`}>
  <div class="cardForCourses">
    <div class="card-icon">
      <img src={`./assets/icons/CardForCourses/${cardInfo.icon}`} alt={cardInfo.title} />
    </div>
    <div class="cardCircle" />

    <b>{cardInfo.title}</b>
    {#if cardInfo.special_offer}
      <div class="special">
        <p>{cardInfo.special_offer_text}</p>
      </div>
    {:else}
      <hr />
    {/if}
    <div class="cardInformation">
      <div class="cardInformation__block">
        <img src="./assets/icons/CardForCourses/clock.png" alt="clock" />
        <p>{cardInfo.duration}</p>
      </div>
      <div class="cardInformation__block">
        <img src="./assets/icons/CardForCourses/Business.png" alt="Business" />
        <p style={activeLang === 'ru' ? 'white-space: pre-line;' : ''}>{currentStudyFormat(cardInfo.study_format)}</p>
      </div>
    </div>
  </div>
</a>

<style>
  .special {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    margin-bottom: 17px;
    margin-top: 14px;
    border-radius: 100px;
    background: #9dff00;
  }
  .special p {
    font-size: 14px;
    line-height: 80%;
    font-weight: 600;
    color: var(--blue-main);
  }
  .cardForCourses {
    width: 270px;
    border-radius: 10px;
    height: 275px;
    background-image: var(--blue-gradient);
    position: relative;
    padding: 20px;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
