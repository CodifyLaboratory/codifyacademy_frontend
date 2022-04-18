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
    {#if win < 650}
      <div class="mobileLine" />
    {/if}
    {#each text.internship.stages as stage}
      <div class="internshipStage">
        <div class="internshipStage__circle1">
          <div class="internshipStage__circle2" />
        </div>
        <b class="coloredText">{stage.title}</b>
        <p>{stage.body}</p>
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
    top: -58px;
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
    top: -55px;
    background: linear-gradient(177.99deg, #131315 -0.39%, #03032a 101.38%);
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
    left: 0;
    right: 0;
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
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  @media screen and (max-width: 650px) {
    .internshipStage b {
      margin-top: 5px;
    }
    .sectionInternship {
      border: none;
    }
    .internship__stages {
      grid-template-columns: 1fr;
    }
    .internshipStage {
      justify-self: start;
      position: unset;
      margin: 0 14%;
    }
    .internshipStage:nth-child(3) {
      justify-self: end;
      position: unset;
    }
    .internshipStage__circle1 {
      top: unset;
    }
    .finalStage {
      justify-self: center;
    }
    .finalStage__img {
      position: relative;
      top: 0;
    }
    .finalStage > b {
      margin-top: 0px;
    }
  }
  @media screen and (max-width: 500px) {
    .internshipStage {
      margin: 0 0;
    }
  }
</style>
