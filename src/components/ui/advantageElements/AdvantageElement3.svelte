<div class="advantageElement__design">
  <img src="./assets/images/home/advantage3.svg" alt="advantage3" />
  <div class="advantageRotateElement3 design3" />
  <div class="design3">
    <img src="./assets/icons/Advantage/devices.svg" alt="devices" />
    <div class="circle3" />
  </div>
</div>

<style>
  .advantageElement__design {
    position: relative;
  }
  .advantageElement__design > img {
    width: 100.2%;
  }
  .design3 {
    border-radius: 50%;
    width: 210px;
    height: 210px;
    right: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -6px;
  }
  .circle3 {
    position: absolute;
    border-radius: 50%;
    border: 7px solid rgba(0, 157, 255, 1);
    width: 105px;
    height: 105px;
    border-left-color: transparent;
    animation: reverse rotate 7s linear infinite;
  }
  .advantageRotateElement3 {
    border: 6px solid var(--blue);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    animation: rotate 4.5s linear infinite;
  }
</style>
