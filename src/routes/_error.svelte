<script>
  // export let status
  // export let error

  import { texts } from '../localization'
  import { language } from '../stores'

  let activeLang = 'ru'

  let text = texts[activeLang].error
  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang].error
  })


</script>

<section class="pageNotFound">
  <h2>{text.notFound}</h2>
  <div class="error404">
    <b>4</b>
    <div class="errorImage">
      <img src="/assets/images/error/circle.svg" alt="O">
      <div class="animateBlock">
        <img class="errorLine" src="/assets/images/error/error-line.svg" alt="line">
      </div>
    </div>
    <b>4</b>
  </div>
  <a href="/">
  <button class="button contained">{text.goHome}</button>
  </a>
</section>

<style>
  .pageNotFound {
    padding-top: 110px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0px;
    padding-bottom: 50px;
  }
  .error404 {
    height: 340px;
    width: 630px;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;

  }
  b{
    font-size: 250px;
    font-weight: 500;
  }
  h2{
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 0 !important;
  }
  .button {
    margin-top: 50px;
  }
  .errorImage {
    position: relative;
    width: 172px;
    height: 172px;
  }
  .errorImage > img {
    animation: reverse broken-rotate 5s ease-in infinite;

  }
  @keyframes broken-rotate {
    0%{
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    26% {
      transform: rotate(50deg);
    }
    30% {
      transform: rotate(90deg);
    }
    40% {
      transform: rotate(135deg);

    }
    41% {
      transform: rotate(100deg);

    }
    50% {
      transform: rotate(180deg);
      
    }
    70% {
      transform: rotate(270deg);
    }
    80%{
      transform: rotate(220deg);

    }

    100%{
      transform: rotate(360deg);

    }
  }
  .animateBlock {
    position: absolute;
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    top: -15px;
    left: -15px;
    /* transform: rotate(180deg); */
    
    animation: broken 3s ease-in forwards;
  }
  @keyframes broken {
    0% {
      transform: rotate(0deg);
    }
    18%{
      top: -15px;
    }
    25% {
      left: -10px;
      /* transform: rotate(80deg); */
    }
    50%{
      top: 105px;
      left: 10px;
      transform: rotate(180deg);
    }
    53%{
      top: 100px;
    }
    60% {
      left: 40px;
      transform: rotate(200deg);

    }
    70% {
      top: 105px;
      left: 3px;
      transform: rotate(170deg);

    }
    80% {
      top: 102px;
      left: 30px;
      transform: rotate(190deg);

    }
    90%{
      top: 105px;
      left: 6px;
      transform: rotate(175deg);
    }

  
    100%{
      left: 10px;
      top: 105px;
      transform: rotate(180deg);

    }
  }
  .errorLine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  @media (max-width: 640px) {
    .animateBlock {
      animation: none;
      display: none;
    }
    .error404 {
      gap: 20px;
      width: 100%;
      margin: 0 auto;
      height: auto;
    }
    h2{
      font-size: 20px;
      margin-bottom: 25px !important;
    }
    .errorImage {
      width: 130px;
      height: 130px;
    }
    .errorImage> img {
      width: 100%;
      height: 100%;
    }
    b {
      font-size: 120px;
    }
  }

</style>
