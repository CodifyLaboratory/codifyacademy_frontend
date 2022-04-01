<script>
  import AdvantageElement1 from '../ui/advantageElements/AdvantageElement1.svelte'
  import AdvantageElement2 from '../ui/advantageElements/AdvantageElement2.svelte'
  import AdvantageElement3 from '../ui/advantageElements/AdvantageElement3.svelte'
  import AdvantageElement4 from '../ui/advantageElements/AdvantageElement4.svelte'

  export let text
  let y
</script>

<!-- section advantage -->
<section class="sectionAdvantage">
  <h2>{text.h2.advantages}</h2>
  <div class="advantage__block container">
    <div style="width: 275px; margin-top: 12px;" class="advantageElement">
      <p class="coloredText">{text.advantages[0].title}</p>
      <p>{text.advantages[0].body}</p>
      <AdvantageElement1 />
    </div>
    <div style="width: 230px; margin-top: 25px;" class="advantageElement">
      <p class="coloredText">{text.advantages[1].title}</p>
      <p>{text.advantages[1].body}</p>
      <AdvantageElement2 />
    </div>
    <div style="width: 276px; margin-top: 17px;" class="advantageElement">
      <p class="coloredText">{text.advantages[2].title}</p>
      <p>{text.advantages[2].body}</p>
      <AdvantageElement3 />
    </div>
    <div style="width: 275px;" class="advantageElement">
      <p class="coloredText">{text.advantages[3].title}</p>
      <p>{text.advantages[3].body}</p>
      <AdvantageElement4 />
    </div>
  </div>
</section>
<!-- section internship -->
<section class="sectionInternship">
  <h2>{text.h2.internship}</h2>
  <div class="internship__stages container">
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
      <div class="finalStage__img" />
      <b class="coloredText">{text.internship.employment}</b>
    </div>
  </div>
</section>
<!-- section employment -->
<section class="sectionEmployment">
  <h2>{text.h2.employment}</h2>
  <div class="employment__block container">
    <div class="employment_design">
      <div class="helpHr">
        <div class="rotate__inside" style={`transform: rotate(${y / 3}deg); transition: 0.1s all;`}>
          <img class="designElement__inside" src="./assets/images/home/Inside.svg" alt="design-element2" />
        </div>
        <img src="./assets/icons/Advantage/HR.svg" alt="hr-icon" />
        <b style="white-space: pre-line;">{text.employment.ourPM}</b>
      </div>
      <img src="./assets/images/home/Outside.svg" alt="design-element" />
    </div>
    <ol>
      {#each text.employment.details as detail, i}
        <li>
          <img src="./assets/images/home/design-element-work2.svg" alt="design-element" />
          <span>{i + 1}</span>{detail}
        </li>
      {/each}
    </ol>
  </div>
</section>

<svelte:window bind:scrollY={y} />

<style>
  /* for advantage section */

  .sectionAdvantage {
    padding-bottom: 280px;
  }
  .advantage__block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
    gap: 20px;
  }
  .advantageElement {
    display: flex;
    flex-direction: column;
  }
  .advantageElement > p {
    font-size: 0.9rem;
    white-space: pre-line;
    padding-left: 15px;
  }
  .advantageElement p:first-child {
    font-weight: bold;
    word-break: keep-all;
    padding-bottom: 10px;
    color: var(--green);
    white-space: nowrap;
  }

  /* for intership section */

  .sectionInternship {
    background: #131315;
    border-top: 2px solid var(--blue);
    padding-top: 0;
  }
  .sectionInternship h2 {
    position: relative;
    top: -120px;
  }
  .internship__stages {
    position: relative;
    top: -65px;
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
  }

  /* for employment section  */

  .sectionEmployment {
    background: #131315;
  }
  .employment__block {
    display: flex;
    height: 410px;
    justify-content: flex-end;
    text-align: end;
    position: relative;
    margin-top: 40px;
  }

  .employment_design {
    height: 100%;
    position: absolute;
    display: flex;
    width: 410px;
    align-items: center;
    justify-content: center;
    left: -5%;
  }
  .employment_design > img {
    position: absolute;
    height: 100%;
    top: 0;
    left: 195px;
  }
  .employment_design .helpHr {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 283px;
    height: 283px;
    text-align: center;
    align-items: center;
  }
  .rotate__inside {
    position: absolute;
    width: 283px;
    height: 283px;
    top: 0;
    left: 0;
  }
  .designElement__inside {
    position: absolute;
    top: 0;
    right: 0;
  }
  ol {
    width: 572px;
    margin-top: 11px;
    z-index: 2;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    background: #131315;
  }
  ol li {
    white-space: nowrap;
    border-radius: 150px;
    background-color: var(--dark-blue);
    background-image: var(--blue-gradient);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    font-weight: 500;
    height: 80px;
    left: 0;
    transition: 0.3s all;
  }
  ol li > img {
    position: absolute;
    top: 0;
    z-index: -1;
    transition: 0.3s all;
    left: -6px;
  }
  li span {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    margin-left: 15px;
    margin-right: 20px;
    background-color: var(--blue);
    transition: 0.3s all;
  }
  ol li:hover {
    left: -4px;
  }
  ol li:hover img {
    left: -2px;
  }
  ol li:hover span {
    background-color: var(--green);
  }
</style>
