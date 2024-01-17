<script>
  export let onClick
</script>

<button on:click={onClick}>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.9549 21.8099L6.89984 29.865H54.8991C55.4329 28.2836 56.9284 27.145 58.6899 27.145C60.8991 27.145 62.6899 28.9358 62.6899 31.145C62.6899 33.3541 60.8991 35.145 58.6899 35.145C56.9285 35.145 55.4329 34.0063 54.8991 32.425H6.89984L14.9549 40.48L13.145 42.2899L2 31.145L13.145 20L14.9549 21.8099Z"
      fill="#009DFF"
    />
  </svg>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.9549 21.8099L6.89984 29.865H54.8991C55.4329 28.2836 56.9284 27.145 58.6899 27.145C60.8991 27.145 62.6899 28.9358 62.6899 31.145C62.6899 33.3541 60.8991 35.145 58.6899 35.145C56.9285 35.145 55.4329 34.0063 54.8991 32.425H6.89984L14.9549 40.48L13.145 42.2899L2 31.145L13.145 20L14.9549 21.8099Z"
      fill="url(#paint0_linear_715_1607)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_715_1607"
        x1="2.03864"
        y1="22.5651"
        x2="24.404"
        y2="66.968"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#07FFE1" />
        <stop offset="1" stop-color="#9DFF00" />
      </linearGradient>
    </defs>
  </svg>
</button>

<style>
  button {
    width: 64px;
    height: 64px;
    position: relative;
  }
  button > svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  button > svg:last-child {
    z-index: 2;
    opacity: 0;
    transition: 0.3s all;
  }
  button:hover > svg:last-child {
    opacity: 1;
  }
</style>
