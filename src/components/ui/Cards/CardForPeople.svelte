<script>
  export let img
  export let title
</script>

<div class="cardForPeople">
  <div class="card-icon">
    <img src={img} alt={title} />
  </div>
  <div class="cardCircle" ></div>

  <b>{title}</b>
  <hr />
  <slot />
</div>

<style>
  .cardCircle {
    position: absolute;
    border: 1px solid var(--blue);
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    border-top: none;
    background-color: var(--dark-blue);
    width: 220px;
    height: 110px;
    top: 0;
  }
  .card-icon {
    position: absolute;
    width: 200px;
    height: 200px;
    top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .card-icon > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .cardForPeople {
    text-align: center;
    width: 100%;
    min-width: 370px;
    max-width: 390px;
    border-radius: 10px;
    background-image: var(--blue-gradient);
    position: relative;
    padding: 20px 30px;
    padding-top: 135px;
    min-height: 274px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  hr {
    width: 90%;
  }
  .cardForPeople {
    min-width: 350px;
  }
</style>
