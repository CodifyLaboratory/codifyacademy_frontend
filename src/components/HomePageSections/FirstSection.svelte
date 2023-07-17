<script>
  import { onMount } from 'svelte'
  import { lazyLoad } from '../lazyLoad'
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
    setTimeout(() => {
      offsetWidth = stickyBtn.offsetWidth
    }, 100)
  })

  let y
  let stickyBtn
  let offSetX
  let offsetWidth = 250
  let scrollToEnroll = 10000
  function consultation() {
      window.open(window.matchMedia("(max-width: 768px)").matches ? 'tel:+996 500 431 430' : 'https://api.whatsapp.com/send?phone=996500431430')
    // animateScroll.scrollTo({ element: '#enroll', duration: 1300, offset: -100 }) // old version of button
  }

  onMount(() => {
    offSetX = stickyBtn.offSetLeft
    offsetWidth = stickyBtn.offsetWidth
    setTimeout(() => {
      scrollToEnroll = document.querySelector('#enroll').offsetTop - 100
    }, 5000)
  })
</script>

<svelte:window bind:scrollY={y} />

<section class="firstSection">
  <div class="container">
    <div>
      <h1>{@html texts[activeLang].homePage.h1}</h1>
      <div class="firstSection__buttons">
        <div style={`width: ${offsetWidth}px`}>
          <button
            bind:this={stickyBtn}
            style={`left: ${offSetX}`}
            class={`button contained ${y > 427 && y < scrollToEnroll ? 'sticky' : ''}`}
            on:click={consultation}>{texts[activeLang].buttons.consultation}</button
          >
        </div>
        <a href={`${activeLang}/courses`}>
          <button class="button">{texts[activeLang].buttons.allCourses}</button>
        </a>
      </div>
    </div>
    <div class="firstImg">
      <img use:lazyLoad={"./assets/images/home/homePageGif.webp"} src="./assets/images/home/homePageGif.webp" alt="world" />
    </div>
  </div>
</section>

<style>
  .firstSection {
    height: 800px;
    background: linear-gradient(109.63deg, #111212 -1.59%, #04051c 105.94%);
  }
  h1 {
    white-space: pre-line;
    font-weight: 300;
    margin-bottom: 40px;
  }
  .firstSection__buttons {
    display: flex;
    gap: 30px;
  }
  .firstImg > img {
    position: relative;
    max-width: 100%;
    right: 100px;
    top: -50px;
  }
  .firstSection > .container {
    display: grid;
    grid-template-columns: 60% auto;
    margin-top: 110px;
  }
  .sticky {
    position: fixed;
    top: 100px;
    z-index: 90;
    animation: blinking infinite linear 2.5s;
  }
  @keyframes blinking {
    from {
      background-color: var(--blue-main);
      box-shadow: -3px -3px 15px rgba(0, 157, 255, 0.2), 3px 3px 15px rgba(0, 157, 255, 0.2);
    }
    40% {
      background-color: var(--blue);
      box-shadow: -3px -3px 20px rgba(0, 157, 255, 0.2), 3px 3px 20px rgba(0, 157, 255, 0.2);
    }
    to {
      background-color: var(--blue-main);
      box-shadow: -3px -3px 15px rgba(0, 157, 255, 0.2), 3px 3px 15px rgba(0, 157, 255, 0.2);
    }
  }
  @media screen and (max-width: 950px) {
    .firstSection > .container {
      margin-top: 70px;
    }
    .firstSection {
      height: 100vh;
      min-height: 600px;
    }
    .firstImg > img {
      right: 50px;
      top: -20px;
    }
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 800px) {
    .firstImg {
      display: none;
    }
    .firstSection > .container {
      grid-template-columns: 1fr;
    }
    h1 {
      font-size: 2.7rem;
    }
  }
  @media screen and (max-width: 650px) {
    .firstSection > .container {
      margin-top: 0;
    }
    .firstSection__buttons {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
