<script>
  import { texts } from '../../localization'
  let isUZ = false
</script>

<header class="header">
  <div class="container">
    <div class="headerNavigation">
      <img src="./assets/icons/logo.svg" alt="logo" />
      <nav>
        <a href="/">Взрослые курсы</a>
        <a href="/">Детские курсы</a>
        <a href="/">Мероприятия</a>
        <a href="/">Контакты</a>
      </nav>
    </div>
    <div class="callUs">
      <button class="call">
        <p>Связаться с нами</p>
      </button>
      {#if isUZ}
        <button class="language">
          <p>{Object.keys(texts)[1]}</p>
          <img src="./assets/icons/ArrowDown-small-white.svg" alt="arrow-down" />
        </button>
      {/if}
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
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  .call {
    border-radius: 100px;
    padding: 10px 30px;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid green;
    background-color: #0a0b18;
    filter: drop-shadow(-4px -4px 10px #00ffa218) drop-shadow(4px 4px 15px #9dff001e);
  }
  .call > p {
    background: linear-gradient(126.1deg, #07ffe1 4.89%, #9dff00 110.2%);
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

  .headerNavigation,
  nav,
  .callUs {
    display: flex;
    gap: 40px;
  }
</style>
