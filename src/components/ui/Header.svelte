<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
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
        <img width="136px" height="28px" src="./assets/icons/logo.webp" alt="logo" />
        {#if path?.includes('teen')}
          <img src="./assets/Teens.svg" alt="teens" class="teens-logo">
        {/if}
      </a>
      <nav style={`display:${!isOpenMenu && win < 1050 ? 'none' : 'flex'}`}>
        <a class={path === '/courses' ? 'active' : ''} href={`/courses`} on:click={()=>{isOpenMenu = false}}>{headerText.academy}</a>
        <a class={path === '/teens' ? 'active' : ''} href="/teens" on:click={()=>{isOpenMenu = false}}>{headerText.teens}</a>
        <a class={path === '/about-us' ? 'active' : ''} href="/about-us" on:click={()=>{isOpenMenu = false}}>О нас</a>

      </nav>
    </div>
    <div class="callUs">
      <button class="call" on:click={() => (callUsIsOpen = true)}>
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
      <img src="./assets/icons/close.svg" alt="closeIcon" on:click={() => (callUsIsOpen = false)} />
      <a class="button contained" href="tel:+996 500 431 430">{headerText.callUs}</a>
      <a class="button contained" href="https://api.whatsapp.com/send?phone=996500431430">WhatsApp</a>
      <p>
        {@html headerText.callUsText}
      </p>
    </div>
  </div>
</header>

<style>
  .teens-logo {
    position: absolute;
    bottom: -25px;
    right: -15px
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
    height: 90px;
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
    border: 1px solid #07ff5a;
    background-color: #0a0b18;
    transition: 0.2s all;
    transform: translate3d(0, 0, 0);

    filter: drop-shadow(-4px -4px 10px #00ffa218) drop-shadow(4px 4px 15px #9dff001e);
  }
  .call:hover {
    border: 1px solid #07ffc1;
  }
  .call:active {
    border: 1px solid rgba(157, 255, 0, 1);
  }

  .call > p {
    background: linear-gradient(126.1deg, #07ffc1 4.89%, #9dff00 110.2%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: 0.5s all;
  }
  .call:hover p {
    background: linear-gradient(126.1deg, #07ffc1 4.89%, #07ffc1 110.2%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .call:active p {
    background: linear-gradient(126.1deg, rgba(157, 255, 0, 1) 4.89%, rgba(157, 255, 0, 1) 110.2%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    nav {
      flex-direction: column;
      background: var(--primary-bg);
      padding: 20px;
      position: absolute;
      gap: 0;
      top: 88px;
      left: 0;
      right: 0;
    }
    .burgerIcon {
      width: 36px;
      height: 36px;
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
    .call {
      padding: 3px 20px;
      display: flex;
    }
    .call img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    .header {
      height: 72px;

    }
    .headerNavigation,
    .callUs {
      gap: 10px;
    }
    .call {
      padding: 3px 20px;
      display: flex;
    }
    .call img {
      width: 24px;
      height: 24px;
    }
  }
</style>
