<script>
  import axios from 'axios'

  import { texts } from '../../localization'
  import { language } from '../../stores'
  import {request} from "../../api";

  let message = ''
  let isPost = false
  let isDisabled = false
  let activeLang = 'ru'

  let text = texts[activeLang]

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang]
  })

  async function submit(e) {
    e.preventDefault()
    const headers = {
      Authorization: 'b8faa2c98db86c13fadc2e339bf33743',
      'content-Type': 'application/json',
    }
    isDisabled = true
    request('post', 'contact-form/submit/', null, {
      name: e.target[0].value,
      phone_number: e.target[1].value,
      comment: 'Консультация'
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: ['Консультация']
            },
            { headers }
          )
          .then(() => {
            isPost = true
            message = 'Заявка отправлена'
            setTimeout(() => {
              message = ''
              isPost = false
              isDisabled=false
            }, 10000)
          })
      })
      .catch(err => {
        message = err.response.data.email?.join() || 'что-то пошло не так'
        isPost = true
        isDisabled = false
        setTimeout(() => {
          message = ''
          isPost = false
        }, 5000)
      })
  }
</script>

<section class="sectionEnroll" id="enroll">
  <div class="container">
    <h2>{text.homePage.h2.enroll}</h2>
    <div class="description-box">
      <p>
        {text.enroll.description}
      </p>

    </div>
    <form on:submit={submit}>
      <div class="formInputs">
        <p class={`successPost ${isPost ? 'post' : ''}`}>{message || text.enroll.postMessage}</p>
        <input required type="text" placeholder={text.enroll.name + '*'} />
        <input required type="number" class="phoneInput" placeholder={text.enroll.phone + '*'} />
<!--        <input type="email" placeholder={text.enroll.email} />-->
        <button disabled={isDisabled} class="button contained">{text.buttons.enroll}</button>
      </div>
      <div class="formCheck">
        <input required type="checkbox" />
        <p>{text.enroll.check}</p>
      </div>
    </form>
  </div>
</section>

<style lang="scss">
  .description-box {
    display: flex;
    justify-content: center;
    width: 100%;
     & p {
       max-width: 875px;
       text-align: center;
       padding-bottom: 20px;
     }
  }
  .button:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: auto;
  }
  .successPost {
    position: absolute;
    top: -55px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 100%;
    min-height: 50px;
    font-size: 16px;
    background-image: var(--primary-bg);
    border-radius: 100px;
    border: 1px solid var(--blue);
    pointer-events: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    opacity: 0;
  }
  .post {
    animation: 4s opac ease-out forwards;
  }
  @keyframes opac {
    0%,
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
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
     @media (max-width: 768px) {
       grid-template-columns: 100%;
     }
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
    .formInputs button {
    }
  }
  @media screen and (max-width: 768px) {
    .formInputs {
      display: grid;
      grid-template-columns: 1fr;
    }
    .formInputs > input {
      min-height: 51px;
    }
    .formCheck > input {
      width: 50px;
    }
  }
</style>
