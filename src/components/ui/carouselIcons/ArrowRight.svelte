<script>
  export let onClick
</script>

<button on:click={onClick}>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_715_1605)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7908 29.865C9.25701 28.2836 7.76147 27.1451 6 27.1451C3.79086 27.1451 2 28.9359 2 31.1451C2 33.3542 3.79086 35.1451 6 35.1451C7.76151 35.1451 9.25708 34.0064 9.79084 32.425H59.0699L51.0148 40.48L52.8247 42.29L63.9697 31.145L52.8247 20L51.0148 21.81L59.0699 29.865H9.7908Z"
        fill="#009DFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_715_1605">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_715_1604)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.7908 29.865C9.25701 28.2836 7.76147 27.1451 6 27.1451C3.79086 27.1451 2 28.9359 2 31.1451C2 33.3542 3.79086 35.1451 6 35.1451C7.76151 35.1451 9.25708 34.0064 9.79084 32.425H59.0699L51.0148 40.48L52.8247 42.29L63.9697 31.145L52.8247 20L51.0148 21.81L59.0699 29.865H9.7908Z"
        fill="url(#paint0_linear_715_1604)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_715_1604"
        x1="2.03945"
        y1="22.5651"
        x2="24.1256"
        y2="67.3384"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#07FFE1" />
        <stop offset="1" stop-color="#9DFF00" />
      </linearGradient>
      <clipPath id="clip0_715_1604">
        <rect width="64" height="64" fill="white" />
      </clipPath>
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
