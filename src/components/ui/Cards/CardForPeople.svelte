<script>
  export let img
  export let title
</script>

<div class="cardForPeople">
  <div class="card-icon">
    <img src={img} alt={title} />
  </div>
  <div class="cardCircle" />

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
  .cardForPeople {
    width: 370px;
    border-radius: 10px;
    background-image: var(--blue-gradient);
    position: relative;
    padding: 20px 30px;
    padding-top: 135px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  hr {
    border: none;
    color: var(--blue);
    background-color: var(--blue);
    margin: 20px 0;
    width: 90%;
    height: 1px;
  }
</style>
