<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang = 'ru'

  let text = texts[activeLang].homePage

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang].homePage
  })

  let win
</script>

<svelte:window bind:innerWidth={win} />
<section class="sectionInternship">
  <h2>{text.h2.internship}</h2>

  <div class="internship__stages container">
    {#if win <= 750}
      <div class="mobileLine" />
    {/if}
    {#each text.internship.stages as stage}
      <div class="internshipStage">
        <div class="internshipStage__circle1">
          <div class="internshipStage__circle2" />
        </div>
        <b class="coloredText">{stage.title}</b>
        <p class="internshipStage_text">{stage.body}</p>
      </div>
    {/each}
    <div class="internshipStage finalStage">
      <div class="finalStage__img">
        <img src="./assets/icons/Advantage/Entrepreneur.svg" alt="Entrepreneur" />
      </div>
      <b class="coloredText">{text.internship.employment}</b>
    </div>
  </div>
</section>

<style>
  .sectionInternship {
    background: #131315;
    border-top: 2px solid var(--blue);
    padding-top: 0;
  }
  .sectionInternship h2 {
    position: relative;
    top: -140px;
  }
  .internship__stages {
    position: relative;
    top: -55px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  .internshipStage {
    justify-self: center;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
    white-space: pre-line;
    gap: 16px;
    margin: 0 14%;
  }
  .internshipStage b {
    color: var(--green);
  }
  .internshipStage__circle1 {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--blue);
    background: var(--dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -57px;
    background: linear-gradient(177.99deg, #131315 -0.39%, #03032a 101.38%);
    transform: translate3d(0, 0, 0);

    filter: drop-shadow(-4px -4px 15px rgba(0, 157, 255, 0.16)) drop-shadow(4px 4px 15px rgba(0, 157, 255, 0.16));
  }
  .internshipStage__circle2 {
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background-color: var(--blue);
  }
  .finalStage > b {
    margin-top: 40px;
  }
  .finalStage__img {
    position: absolute;
    top: -100px;
    right: -55px;
    margin: 0 auto;
    width: 120px;
    height: 120px;
    background-color: var(--dark-blue);
    border-radius: 50%;
    border: 1px solid var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mobileLine {
    height: calc(100% - 100px);
    width: 2px;
    position: absolute;
    background-color: var(--blue);
    top: 0;
    left: 60px;

  }

  @media screen and (max-width: 790px) {
    .internship__stages {
      top: -95px;
    }
  }

  @media screen and (max-width: 750px) {
    .internshipStage b {
      margin-top: 5px;
      display: none;
    }
    .internshipStage_text {
      width: 100%;
      padding-left: 90px;
      text-align: start;
    }
    .sectionInternship {
      border: none;
    }
    .internship__stages {
      grid-template-columns: 1fr;

    }
    .internshipStage {
      justify-self: flex-start;
      position: unset;
      margin: 0;
    }
    .internshipStage:nth-child(3) {
      justify-self: flex-start;
      position: unset;
    }
    .internshipStage__circle1 {
      top: unset;
      right: unset;
      left: 46px;
    }
    .finalStage {
      justify-self: flex-start;
    }
    .finalStage__img {
      position: relative;
      top: unset;
      right: 0;
    }
    .finalStage > b {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 500px) {
    .internshipStage {
      margin: 0 0;
    }
  }
</style>
