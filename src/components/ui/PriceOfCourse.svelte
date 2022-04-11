<script>
  let discount = true
</script>

<div class="coursePrice">
  <h3>Стоимость обучения</h3>
  <hr />
  <div class="price">
    <div>
      <h6>8 000 сом/месяц</h6>
      {#if discount}
        <p class="oldPrice">10 000 coм/месяц</p>
      {/if}
    </div>
    <p>*Оплату можно вносить частями</p>
  </div>
  <hr />
  <div class="price_info">
    <p><strong>Старт курса:</strong> 5 августа</p>
    <p><strong>Осталось:</strong> 15 мест</p>
  </div>
  <button class="button contained">Записаться на курс</button>
</div>

<style>
  .coursePrice {
    padding: 40px;
    border-radius: 10px;
    min-width: 514px;
    background: var(--blue-gradient);
  }
  hr {
    margin: 30px 0;
  }
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
  }
  h6 {
    font-size: 1.55rem;
    font-weight: 500;
  }
  .price,
  .price_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .price > div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .price > p {
    font-size: 0.85rem;
  }
  .price_info {
    margin-bottom: 50px;
  }
  .price_info > p {
    font-size: 1.25rem;
  }
  .price_info strong {
    font-weight: 500;
  }
  .oldPrice {
    text-decoration: line-through;
  }
</style>
