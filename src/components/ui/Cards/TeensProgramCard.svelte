<script>
  export let icon
  export let title
  export let description
  export let id
  export let order
  export let index = 0
</script>

<div class="filled-card card">
    <div class="img-container card-{index} {(index + 1) % 3 === 0 ? 'top' : (((index + 1 )% 3) === 1 ? 'bottom' : 'middle')}">
        <img src={icon} alt="card-img">
    </div>
    <div class="text-container">
        <p class="title">{title}</p>
        <p class="description">{description}</p>
    </div>

</div>

<style lang="scss">
  .text-container {
    height: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .filled-card {
    min-height: 195px;
    position: relative;
    overflow: hidden;
    gap: 30px;

    & * {
      text-align: start;
      line-height: unset;

    }
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      min-height: unset;
    }
  }
  .img-container {
    position: absolute;
    right: -30px;
    opacity: 0.4;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
     &.top {
       top: -30px;
       transform: rotate(-120deg);

     }
    &.middle {
      top: 40px;
      @media (max-width: 768px) {
        top: 8px;
      }
    }
    &.bottom {
      bottom: -30px;
      transform: rotate(60deg);
    }
    &.card-5 {
      bottom: -10px !important;
      top: unset !important;
      transform: rotate(160deg) !important;
    }
  }
  img {
    height: 100% !important;
  }
  .title {
    padding: 0 0 10px;
    font-size: 20px;
    font-weight: 500;
  }
  .description{
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 768px) {
      white-space: unset;
      font-size: 14px;
    }
  }

</style>
