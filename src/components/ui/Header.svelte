<script>
  import { onMount } from 'svelte'
  import * as animateScroll from 'svelte-scrollto'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  let callUsIsOpen = false
  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const headerText = texts[activeLang].header

  let showLanguages = false
  function changeLang(lang) {
    language.set(lang)
    showLanguages = false
  }

  let win
  let isOpenMenu = false
  onMount(() => {
    isOpenMenu = win > 1050
  })
</script>

<svelte:window bind:outerWidth={win} on:scroll={() => (callUsIsOpen = false)} />
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

      <img src="./assets/icons/logo.svg" alt="logo" />
      <nav style={`display:${!isOpenMenu && win < 1050 ? 'none' : 'flex'}`}>
        <a href="/">{headerText.academy}</a>
        <a href="https://teens.codifylab.com/" target="_blank">{headerText.teens}</a>
        <button
          on:click={() => {
            animateScroll.scrollToBottom({ duration: 2000 })
            isOpenMenu = false
          }}>{headerText.contacts}</button
        >
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
      <button class="language" on:click={() => (showLanguages = !showLanguages)}>
        <p>{activeLang.toUpperCase()}</p>
        <img
          style={showLanguages ? 'transform: rotate(180deg);' : ''}
          src="./assets/icons/ArrowDown-small-white.svg"
          alt="arrow-down"
        />
      </button>
      {#if showLanguages}
        <div class="languageDropDown">
          <p on:click={() => changeLang('ru')}>RU</p>
          <p on:click={() => changeLang('en')}>EN</p>
        </div>
      {/if}
    </div>
    <div class={`callUsModal ${callUsIsOpen ? 'openCall' : ''}`}>
      <img src="./assets/icons/close.svg" alt="closeIcon" on:click={() => (callUsIsOpen = false)} />
      <p>
        {@html headerText.callUsText}
      </p>
    </div>
  </div>
</header>

<style>
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
    top: 100px;
    right: -300px;
    width: 280px;
    border-radius: 15px;
    background-image: var(--blue-gradient);
    background-color: var(--blue);
    padding: 15px;
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
    font-weight: 300;
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
    right: 14px;
    bottom: -60px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .languageDropDown > p {
    cursor: pointer;
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
  @media screen and (max-width: 750px) {
    .headerNavigation,
    .callUs {
      gap: 10px;
    }
  }
</style>
