<script>
  import axios from 'axios'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import { request } from '../../api'

  export let course_title = ''
  export let forMainPage = false
  let message = ''
  let isPost = false
  let isDisabled = false
  let isMessageVisible = false
  let activeLang = 'ru'

  let text = texts[activeLang]

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang]
  })

  async function submit(e) {
    e.preventDefault()

    const phoneNumber = e.target[1].value
    if (phoneNumber.length < 8 || phoneNumber.length > 15) {
      message = 'Номер телефона должен содержать от 8 до 15 цифр.'
      isMessageVisible = true
      return
    }

    const headers = {
      Authorization: 'b8faa2c98db86c13fadc2e339bf33743',
      'content-Type': 'application/json',
    }

    if (isDisabled) return

    isDisabled = true
    request('post', 'contact-form/submit/', null, {
      name: e.target[0].value,
      phone_number: e.target[1].value,
      comment: !!course_title ? `Оставил заявку на странице курса ${course_title}` : 'Консультация',
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              extra_comments: [
                'Консультация',
                course_title ? `Оставил заявку на странице курса ${course_title}` : 'Главная страница',
              ],
            },
            { headers }
          )
          .then(() => {
            isPost = true
            message = 'Заявка отправлена'
            isMessageVisible = true
            isDisabled = false
          })
      })
      .catch(err => {
        message = err.response.data.email?.join() || 'что-то пошло не так'
        isPost = true
        isMessageVisible = true
        isDisabled = false
      })
  }

  function closeMessage() {
    isMessageVisible = false
    isPost = false
  }
</script>

<section class="sectionEnroll" id="enroll">
  <div class="container">
    <h2 style={forMainPage ? 'text-align: start' : ''}>{text.homePage.h2.enroll}</h2>
    <div class="description-box" style={forMainPage ? 'justify-content: start' : ''}>
      <p style={forMainPage ? 'text-align: start' : ''}>
        Мы с удовольствием ответим на все ваши вопросы и поможем определиться с выбором курса!
      </p>
    </div>
    <form on:submit={submit}>
      <div class="formInputs">
        {#if isMessageVisible}
          <div class="successPost">
            <p>{message || text.enroll.postMessage}</p>
            <button class="close-button" on:click={closeMessage}>X</button>
          </div>
        {/if}
        {#if !isPost || !isMessageVisible}
          <input required type="text" placeholder={text.enroll.name + '*'} />
          <input required type="number" class="phoneInput" placeholder={text.enroll.phone + '*'} />
          <button disabled={isDisabled} class="button contained">Оставить заявку</button>
        {/if}
      </div>
      <div class="formCheck">
        <p>{text.enroll.check}</p>
      </div>
    </form>
  </div>
</section>

<style>
  h2 {
    margin-bottom: 15px !important;
  }
  .description-box {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .description-box p {
    max-width: 875px;
    text-align: center;
    padding-bottom: 50px;
  }
  .button:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: auto;
  }
  .successPost {
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 100%;
    min-height: 50px;
    font-size: 16px;
    background-image: var(--primary-bg);
    border-radius: 100px;
    border: 1px solid var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    opacity: 1;
  }
  .close-button {
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
  .sectionEnroll {
    padding: 100px 0;
    background-color: #131315;
  }
  .formInputs {
    display: grid;
    gap: 20px;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  .formCheck {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .formInputs > input {
    width: 100%;
    min-width: 230px;
    padding: 10px 30px;
    line-height: 1.2rem;
    border-radius: 100px;
    border: 1px solid var(--blue-main);
    background-color: #131315;
  }
  .formInputs > input:hover {
    border-color: #0071bc;
    box-shadow: 4px 4px 20px rgba(0, 157, 255, 0.2);
  }
  .formInputs > input:focus {
    border-color: #07ffe1;
    box-shadow: 4px 4px 20px rgba(0, 157, 255, 0.2);
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
    .formCheck > input {
      width: 20px;
      height: 20px;
    }
    .formInputs > input {
      width: 100%;
      min-width: 230px;
      max-width: 4900px;
    }
  }
  @media screen and (max-width: 768px) {
    .description-box p {
      padding-bottom: 30px;
      text-align: start;
    }
    .formInputs {
      display: grid;
      grid-template-columns: 100%;
    }
    .formInputs > input {
      min-height: 51px;
    }
  }
</style>
