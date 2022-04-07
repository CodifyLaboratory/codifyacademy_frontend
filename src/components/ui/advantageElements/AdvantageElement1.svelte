<div class="advantageElement__design">
  <img src="./assets/images/home/advantage1.svg" alt="advantage1" />
  <div class="advantageRotateElement1 design1">
    <img src="./assets/images/home/advantage1-1.svg" alt="advantage1-1" />
  </div>
  <div class="design1">
    <div class="circle1">
      <img src="./assets/icons/Advantage/failure.svg" alt="failure" />
    </div>
  </div>
</div>

<style>
  .advantageElement__design {
    position: relative;
  }
  .advantageElement__design > img {
    width: 100.2%;
  }
  .design1 {
    width: 194px;
    height: 194px;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -7px;
  }
  .circle1 {
    border-radius: 50%;
    border: 5px solid rgba(0, 157, 255, 1);
    width: 144px;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -4px -4px 15px rgba(0, 157, 255, 0.25), 4px 4px 15px rgba(0, 157, 255, 0.25);
  }

  .advantageRotateElement1 {
    animation: rotate 4s linear infinite;
  }
  .advantageRotateElement1 > img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
