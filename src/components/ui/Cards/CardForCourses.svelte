<script>
  export let cardInfo = {
    img: './assets/icons/CardForCourses/python.png',
    title: 'lorem ipsum asdasd',
    time: '2 месяца',
    type: 'Офлайн',
  }
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
  .cardCircle {
    position: absolute;
    border: 1px solid var(--blue);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: none;
    background-color: var(--dark-blue);
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
  .cardForCourses {
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
  hr {
    border: none;
    color: var(--blue);
    background-color: var(--blue);
    margin-top: 20px;
    margin-bottom: 40px;
    width: 90%;
    height: 1px;
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
