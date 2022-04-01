<script>
  export let cardInfo
</script>

<div class="cardForCourses">
  <div class="card-icon">
    <img src={cardInfo.img} alt={cardInfo.title} />
  </div>
  <div class="cardCircle" />

  <b>{cardInfo.title}</b>
  <hr />
  <div class="cardInformation">
    <div class="cardInformation__block">
      <img src="./assets/icons/CardForCourses/clock.png" alt="clock" />
      <p>{cardInfo.time}</p>
    </div>
    <div class="cardInformation__block">
      <img src="./assets/icons/CardForCourses/Business.png" alt="Business" />
      <p>{cardInfo.type}</p>
    </div>
  </div>
</div>

<style>
  .cardForCourses {
    /* width: calc(25% - 20px);
    min-width: 210px;
    max-width: 270px; */
    width: 270px;
    border-radius: 10px;
    background-image: var(--blue-gradient);
    position: relative;
    padding: 30px 20px;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cardCircle {
    position: absolute;
    border: 1px solid var(--blue);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: none;
    background-color: rgb(16 16 26);
    width: 100px;
    height: 50px;
    top: 0;
  }
  .card-icon {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  b,
  p {
    white-space: nowrap;
  }
  hr {
    width: 90%;
    margin-bottom: 40px;
  }
  .cardInformation {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  .cardInformation__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>
