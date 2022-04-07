<div class="advantageElement__design">
  <img src="./assets/images/home/advantage2.svg" alt="advantage2" />
  <div class="advantageRotateElement2__1 design2">
    <img src="./assets/images/home/advantage2-1.svg" alt="advantage2-1" />
  </div>
  <div class="design2">
    <div class="advantageRotateElement2__2">
      <img src="./assets/images/home/advantage2-2.svg" alt="advantage2-2" />
    </div>
  </div>
  <div class="design2">
    <div class="circle2">
      <img src="./assets/icons/Advantage/managment.svg" alt="managment" />
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
  .design2 {
    width: 182px;
    height: 182px;
    right: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 22px;
  }
  .circle2 {
    border-radius: 50%;
    border: 6px solid var(--blue);
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -4px -4px 15px rgba(0, 157, 255, 0.25), 4px 4px 15px rgba(0, 157, 255, 0.25);
  }

  .advantageRotateElement2__1 {
    animation: reverse rotate 5.5s linear infinite;
  }
  .advantageRotateElement2__1 > img {
    position: absolute;
    bottom: -9px;
    right: -3px;
  }
  .advantageRotateElement2__2 {
    width: 160px;
    height: 160px;
    position: relative;
    animation: rotate 6.5s linear infinite;
  }
  .advantageRotateElement2__2 > img {
    position: absolute;
    bottom: 2px;
    left: 4px;
  }
</style>
