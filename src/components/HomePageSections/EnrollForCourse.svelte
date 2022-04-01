<script>
</script>

<section class="sectionEnroll">
  <h2>Получить консультацию и записаться на курс</h2>
  <div class="container">
    <form action="">
      <div class="formInputs">
        <input required type="text" placeholder="Имя" />
        <input required type="text" placeholder="Номер телефона" />
        <input type="text" placeholder="E-mail" />
        <button class="button contained">Записаться на курс</button>
      </div>
      <div class="formCheck">
        <input required type="checkbox" />
        <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформы</p>
      </div>
    </form>
  </div>
</section>

<style>
  .sectionEnroll {
    margin-top: 160px;
    padding: 100px 0;
    background-color: #131315;
  }
  .formInputs,
  .formCheck {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .formInputs > input {
    min-width: 290px;
    padding: 10px 30px;
    line-height: 1.2rem;
    border-radius: 100px;
    border: 1px solid var(--blue-main);
    background-color: #131315;
  }
  .formCheck {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 10px;
    margin-top: 20px;
    justify-content: flex-start;
  }
  .formCheck > p {
    font-size: 12px;
  }
  .formCheck > input {
    width: 15px;
    height: 15px;
  }
</style>
