<script>
  import axios from 'axios'

  import { texts } from '../../localization'
  import { language } from '../../stores'

  let message = ''
  let isPost = false

  async function submit(e) {
    e.preventDefault()
    console.dir(e.target)
    const headers = { Authorization: 'b8faa2c98db86c13fadc2e339bf33743' }
    axios
      .post(
        'https://academy.codifylab.com/api/crm/leads/?org_id=1',
        {
          first_name: e.target[0].value,
          phone: e.target[1].value
        },
        { headers }
      )
      .then( () => {
        axios
      .post('http://codify.home.kg/ru/api/contact_form/', {
        name: e.target[0].value,
        phone_number: e.target[1].value,
        email: e.target[2].value ? e.target[2].value : null,
      })
      .then(() => {
        isPost = true
        message = ''
        setTimeout(() => {
          isPost = false
        }, 5000)
      })
      .catch(err => {
        message = err.response.data.email.join()
        isPost = true
        setTimeout(() => {
          ;(message = ''), (isPost = false)
        }, 5000)
      })
      })
    
  }

  let activeLang
  language.subscribe(lang => (activeLang = lang))
  const text = texts[activeLang]
</script>

<section class="sectionEnroll" id="enroll">
  <div class="container">
    <h2>{text.homePage.h2.enroll}</h2>
    <form on:submit={submit}>
      <div class="formInputs">
        <p class={`successPost ${isPost ? 'post' : ''}`}>{message || text.enroll.postMessage}</p>
        <input required type="text" placeholder={text.enroll.name + '*'} />
        <input required type="number" class="phoneInput" placeholder={text.enroll.phone + '*'} />
        <input type="email" placeholder={text.enroll.email} />
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
  .successPost {
    position: absolute;
    top: -55px;
    left: 0;
    margin: 0 auto;
    max-width: 100%;
    height: 50px;
    background-image: var(--primary-bg);
    border-radius: 100px;
    border: 1px solid var(--blue);
    pointer-events: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
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
    margin-top: 160px;
    padding: 100px 0;
    background-color: #131315;
  }
  .formInputs,
  .formCheck {
    width: 100%;
    position: relative;
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
