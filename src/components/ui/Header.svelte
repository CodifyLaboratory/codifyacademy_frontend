<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import {stores} from "@sapper/app";
  import Modal from '../modal/modal.svelte'
  import FindEducation from '../FindEducation/FindEducation.svelte'
  const {page} = stores()

  let callUsIsOpen = false
  let activeLang = 'ru'
  export let path
  let headerText = texts[activeLang].header
  language.subscribe(lang => {
    activeLang = lang
    headerText = texts[activeLang].header
  })

  let showLanguages = false
  // function changeLang(lang) {
  //   language.set(lang)
  //   showLanguages = false
  // }

  let win
  let isOpenMenu = false
  let it_map_downloaded = false
  let isModalOpen = false
</script>

<svelte:window bind:innerWidth={win} on:scroll={() => (callUsIsOpen = false)} />
<header class="header">
  <div class="container">
    <div class="headerNavigation">
      {#if win < 1050}
        <img
          on:click={() => (isOpenMenu = !isOpenMenu)}
          class="burgerIcon"
          src="./assets/icons/menu.svg"
          alt="burger"
        />
      {/if}
      <a href="/" style="display: flex; align-items: center; position: relative">
        <img width="136px" height="28px" src="./assets/logo.svg" class="logo-img" alt="logo" />
        {#if path?.includes('teen')}
          <img src="./assets/Teens.svg" alt="teens" class="teens-logo">
        {/if}
      </a>
      <nav class="desktop-nav">
        <a class={path === '/teens' ? 'active' : ''} href="/teens" on:click={()=>{isOpenMenu = false}}>{headerText.teens}</a>
        <a class={path === '/courses' ? 'active' : ''} href={`/courses`} on:click={()=>{isOpenMenu = false}}>{headerText.academy}</a>
        <a class={path === '/about-us' ? 'active' : ''} href="/about-us" on:click={()=>{isOpenMenu = false}}>О нас</a>
      </nav>
      <div class={`mobile-nav ${isOpenMenu ? 'opened' : ''}`}
           on:click={()=>{isOpenMenu = false}}
      >
      <nav>
        <a class={path === '/courses' ? 'active' : ''} href={`/courses`}>{headerText.academy}</a>
        <a class={path === '/teens' ? 'active' : ''} href="/teens">{headerText.teens}</a>
        <a class={path === '/about-us' ? 'active' : ''} href="/about-us">О нас</a>
      </nav>
      </div>

    </div>
    <div class="callUs">
      <button class="call" on:click={() => (callUsIsOpen = !callUsIsOpen)}>
        {#if win > 950}
          <p>{headerText.call}</p>
        {:else}
          <img src="./assets/icons/phone.svg" alt="phone" />
        {/if}
      </button>
<!--      <button class="language" on:click={() => (showLanguages = !showLanguages)}>-->
<!--        {activeLang.toUpperCase()}-->
<!--        <img-->
<!--          style={showLanguages ? 'transform: rotate(180deg);' : ''}-->
<!--          src="./assets/icons/ArrowDown-small-white.svg"-->
<!--          alt="arrow-down"-->
<!--        />-->
<!--      </button>-->
<!--      {#if showLanguages}-->
<!--        <div class="languageDropDown">-->
<!--          <p on:click={() => changeLang('ru')}>RU</p>-->
<!--          <p on:click={() => changeLang('en')}>EN</p>-->
<!--        </div>-->
<!--      {/if}-->
    </div>
    <div class={`callUsModal ${callUsIsOpen ? 'openCall' : ''}`}>
      <img src="./assets/icons/close.svg" alt="closeIcon" style="cursor: pointer" on:click={() => (callUsIsOpen = false)} />
      <a class="button contained" href="tel:+996 500 431 430">{headerText.callUs}</a>
      <a class="button contained" href="https://api.whatsapp.com/send?phone=996500431430">WhatsApp</a>
      <p>
        {@html headerText.callUsText}
      </p>

    </div>
  </div>
</header>
{#if $page.path === '/' && !it_map_downloaded}
  <div class="it-map">
    <div class="gradient-bg">

      <div class="container">
        <p class="it-map-text">Получите карту актуальных IT профессий 🚀</p>
        <div style="display: flex; align-items: center; gap: 10px">

          <button class="button contained"
                  on:click={() =>{
                    it_map_downloaded = true
                    isModalOpen = true
                     }}
          >Получить карту</button>
          <img width="18" height="18" src="./assets/icons/close.svg" alt="closeIcon" style="cursor: pointer" on:click={() => (it_map_downloaded = true)} />
        </div>

      </div>
    </div>
  </div>
{/if}
<Modal isOpen={isModalOpen} setModalOpen={() => isModalOpen = !isModalOpen}>
  <div style='max-width: 392px; background: #111119'>

  <FindEducation forMap forModalMap />
  </div>

</Modal>

<style>
  .mobile-nav {
    display: none;
  }
  .it-map {
    position: fixed;
    background: #111119;
    top: 73px;
    left: 0;
    width: 100%;
    z-index: 100;
    /*display: none;*/
    /*top: 74px;*/
  }
  .gradient-bg {
    width: 100%;
    background: linear-gradient(140deg, rgba(0, 157, 255, 0.30) 0%, rgba(188, 20, 227, 0.30) 100%);

  }
  .it-map .container {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .it-map .button {
    padding: 10px 20px;
    min-height: auto;
    background: var(--blue-main);
  }
  .it-map-text {
    font-size: 20px;
  }
  .teens-logo {
    position: absolute;
    bottom: -23px;
    right: -23px
  }
  .active {
    color: var(--light-blue);
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 15px 0;
    background-image: linear-gradient(109.63deg, #111212 -1.59%, #04051c 105.94%);
    z-index: 10000;
  }
  .callUsModal {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    top: 100px;
    right: -300px;
    width: 240px;
    border-radius: 15px;
    background-image: var(--blue-gradient);
    background-color: var(--blue);
    padding: 20px 15px 15px;
    text-align: center;
    opacity: 0;
    transition: 0.4s all;
  }

  .callUsModal > img {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 10px;
    top: 10px;
  }
  .callUsModal > p {
    white-space: pre-line;
  }
  .openCall {
    opacity: 1;
    right: 50px;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  nav > button {
    font-weight: 400;
    transition: 0.2s all;
    height: 40px;
    line-height: 40px;
  }
  nav > button:hover {
    color: var(--light-blue);
  }
  .call {
    border-radius: 100px;
    padding: 10px 30px;
    font-size: 1rem;
    font-weight: 500;
    color: #009DFF;
    border: 1px solid #009DFF;
    background-color: #0a0b18;
    transition: 0.2s all;
    transform: translate3d(0, 0, 0);
  }
  .call:hover {
    border-color:#00b2ff;
  }

  .call > p {
    color: #009DFF;
    transition: 0.2s all;
  }
  .call:hover p {
    color: #00b2ff;
  }
  .container,
  .language {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .language > img {
    transition: 0.3s all;
  }
  .language p {
    font-size: 18px !important;
    line-height: 1rem;
  }
  .headerNavigation,
  nav,
  .callUs {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .callUs {
    position: relative;
  }
  .languageDropDown {
    position: absolute;
    right: 0;
    bottom: -80px;
    padding: 15px 10px;
    padding-right: 25px;
    background-color: #06071b;
    border-radius: 12px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px !important;
  }
  .languageDropDown > p {
    cursor: pointer;
  }
  .languageDropDown > p:hover {
    color: var(--blue);
  }
  @media screen and (max-width: 1150px) {
    .headerNavigation,
    nav,
    .callUs {
      gap: 20px;
    }
  }
  @media screen and (max-width: 1050px) {
    .mobile-nav {
      z-index: -1;
      display: block;
      position: absolute;
      width: 100vw;
      top: 64px;
      left: 0;
      right: 0;
      height: calc(100vh - 64px);
      transition: 0.3s ease-out background-color;
      transform: translate3d(0, -150%, 0);

    }
    .mobile-nav.opened {
      background-color: rgba(5, 33, 49, 0.38);
      transform: translate3d(0, 0, 0);
    }
    .mobile-nav nav {
      display: flex;
      flex-direction: column;
      background: var(--primary-bg);
      padding: 20px;
      transform: translate3d(0, -150%, 0);
      transition: 0.3s ease-out;
    }
    .mobile-nav.opened nav  {
      transform: translate3d(0, 0, 0);
    }
    .desktop-nav {
      display: none;
    }

    .burgerIcon {
      width: 32px;
      height: 32px;
    }
    nav > a {
      height: 40px;
      line-height: 40px;
    }
    nav > a:not(:last-child) {
      border-bottom: 1px solid var(--blue);
    }
  }
  @media screen and (max-width: 950px) {
    .it-map {
      top: 63px;
    }
    .call {
      padding: 3px 15px;
      display: flex;
      border-width: 2px;
    }
    .call img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    .it-map , .mobile-nav {
      top: 54px;
    }
    .it-map-text {
      font-size: 12px;
    }
    .it-map .button {
      font-size: 12px;
    }
    .header {
      padding: 10px 0;
    }
    .logo-img {
      height: 20px;
      width: 98px;
    }
    .headerNavigation,
    .callUs {
      gap: 10px;
    }
    .call {
      padding: 3px 15px;
      display: flex;
    }
    .call img {
      width: 24px;
      height: 24px;
    }
  }
</style>
