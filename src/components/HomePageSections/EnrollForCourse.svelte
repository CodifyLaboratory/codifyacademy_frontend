<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang]
</script>

<section class="sectionEnroll" id="enroll">
  <div class="container">
    <h2>{text.homePage.h2.enroll}</h2>
    <form action="">
      <div class="formInputs">
        <input required type="text" placeholder={text.enroll.name + '*'} />
        <input required type="number" class="phoneInput" placeholder={text.enroll.phone + '*'} />
        <input type="text" placeholder={text.enroll.email} />
        <button class="button contained">{text.buttons.enroll}</button>
      </div>
      <div class="formCheck">
        <input required type="checkbox" />
        <p>{text.enroll.check}</p>
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
    width: 27%;
    min-width: 230px;
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
    margin-left: 1px;
    margin-top: 20px;
    justify-content: flex-start;
  }
  .formCheck > p {
    font-size: 12px;
    line-height: 12px;
  }
  .formCheck > input {
    width: 15px;
    height: 15px;
  }
  .phoneInput {
    -moz-appearance: textfield;
  }
  .phoneInput::-webkit-inner-spin-button {
    display: none;
  }
  @media screen and (max-width: 1050px) {
    .formInputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .formCheck > input {
      width: 20px;
      height: 20px;
    }
    .formInputs > input {
      width: 100%;
      min-width: 230px;
      max-width: 4900px;
      align-self: center;
      justify-self: center;
    }
    .formInputs button {
      justify-self: flex-end;
    }
  }
  @media screen and (max-width: 650px) {
    .formInputs {
      display: grid;
      grid-template-columns: 1fr;
    }
    .formCheck > input {
      width: 50px;
    }
  }
</style>
