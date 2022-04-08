<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang].homePage

  let y
</script>

<section class="sectionEmployment">
  <h2>{text.h2.employment}</h2>
  <div class="employment__block container">
    <div class="employment_design">
      <div class="helpHr">
        <div class="rotate__inside" style={`transform: rotate(${y / 6}deg); transition: 0.1s all;`}>
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
  .sectionEmployment {
    background: #131315;
  }
  h2 {
    width: 90%;
    margin: 0 auto;
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

  @media screen and (max-width: 1050px) {
    .employment__block {
      flex-direction: column;
      height: auto;
      align-items: center;
      gap: 30px;
    }
    .employment_design > img {
      display: none;
    }
    .employment_design {
      position: relative;
      width: unset;
      left: 0;
    }
    ol {
      width: 100%;
      max-width: 572px;
      padding-left: 0;
    }
    ol li > img {
      display: none;
    }
  }
  @media screen and (max-width: 750px) {
    .sectionEmployment {
      padding-top: 70px;
    }
    ol li {
      white-space: normal;
      text-align: start;
      justify-content: flex-start;
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
    .employment_design .helpHr {
      overflow: hidden;
    }
    ol li > span {
      min-width: 50px;
    }
  }
</style>
