<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import Loading from '../../components/ui/loading.svelte'
  import axios from 'axios'
  import { request } from '../../api'

  export let forMap = false
  export let forTeens = false
  export let forModalMap = false
  export let forTeensPlan = false
  let activeLang = 'ru'
  let message = ''
  let isPost = false
  let isDisabled = false
  let isMessageVisible = false

  language.subscribe(lang => {
    activeLang = lang
  })

  async function submit(e) {
    e.preventDefault()

    const phoneNumber = e.target[1].value
    if (phoneNumber.length < 8 || phoneNumber.length > 15) {
      message = 'Номер телефона должен содержать от 8 до 15 цифр.'
      isMessageVisible = true
      return
    }

    if (isDisabled) return

    isDisabled = true

    const headers = {
      Authorization: 'b8faa2c98db86c13fadc2e339bf33743',
      'content-Type': 'application/json',
    }

    request('post', 'contact-form/submit/', null, {
      name: e.target[0].value,
      phone_number: phoneNumber,
      comment: forMap ? 'Карта IT-профессий' : 'Поможем подобрать обучение',
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: phoneNumber,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: [
                'Главная страница',
                forMap
                  ? 'Карта IT-профессий'
                  : forTeens
                    ? 'Главная страница детских курсов'
                    : forTeensPlan
                      ? 'План обучения для детей'
                      : 'Поможем подобрать обучение',
              ],
            },
            { headers }
          )
          .then(() => {
            isPost = true
            isDisabled = false
            message = 'Заявка отправлена!'
            isMessageVisible = true
          })
      })
      .catch(err => {
        message = err.response.data.email?.join() || 'что-то пошло не так'
        isPost = true
        isDisabled = false
        isMessageVisible = true
      })
  }

  function closeMessage() {
    isMessageVisible = false
    isPost = false
  }
</script>

<form
  on:submit={submit}
  style={`min-height: 478px; ${forModalMap ? 'background: linear-gradient(140deg, rgba(0, 157, 255, 0.50) 0%, rgba(188, 20, 227, 0.50) 100%)' : ''}`}
  class="card {forMap ? 'w-100' : null}"
>
  {#if isDisabled && !isPost}
    <div class="innerLoading">
      <Loading isTransparent vh="20" />
    </div>
  {/if}
  {#if isPost && isMessageVisible}
    <div class="innerLoading complete">
      <div>
        <button class="close-button" on:click={closeMessage}>X</button>
      </div>
      <p>{message}</p>
      <p></p>
    </div>
  {/if}
  {#if !isPost || !isMessageVisible}
    <div class={`find-education ${isDisabled || isPost ? 'transparent' : ''}`}>
      {#if !forMap && !forTeens && !forTeensPlan}
        <p>{texts[activeLang].findEducation.title}</p>
      {/if}
      {#if forModalMap}
        <p>Получите карту актуальных IT профессий</p>
      {/if}
      {#if forTeens}
        <p>Запишитесь на диагностику IT навыков ребенка и получите карту IT профессий будущего</p>
      {/if}
      {#if forTeensPlan}
        <p style="padding-right: 20px">Получите план обучения вашего ребенка 🚀</p>
      {/if}
      <input required type="text" placeholder={texts[activeLang].findEducation.input_name} />
      <input required type="number" placeholder={texts[activeLang].findEducation.input_phone} />
      <button class="button contained"
        >{forMap
          ? 'Получить карту IT профессий'
          : forTeensPlan
            ? 'Получить план обучения'
            : forTeens
              ? 'Записаться на диагностику'
              : texts[activeLang].findEducation.button}</button
      >
      <span class="subtitle">{'Нажимая на кнопку, вы даете согласие на обработку персональных данных'}</span>
    </div>
  {/if}
</form>

<style>
  .card {
    position: relative;
    max-width: 392px;
  }
  .card.w-100 {
    max-width: unset;
    width: 100%;
  }
  .innerLoading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .innerLoading.complete {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }

  .innerLoading.complete div {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .find-education {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .find-education.transparent {
    opacity: 0;
    pointer-events: none;
    user-select: none;
    cursor: default;
  }
  p {
    color: var(--white);
    font-size: 24px;
    font-weight: 500;
    line-height: 130%; /* 36.4px */
  }
  input {
    border: 1px solid white;
    padding: 11px 30px;
    height: 60px;
    background: transparent;
    color: white;
    font-size: 16px;
    font-weight: 300;
    border-radius: 100px;
  }
  input::placeholder {
    color: white;
    opacity: 0.7;
  }
  .subtitle {
    font-weight: 300;
    font-size: 14px;
  }
  a {
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: #009dff;
    text-decoration: underline;
  }
  a:hover {
    color: var(--blue);
  }
  .close-button {
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  @media (max-width: 855px) {
    .card {
      max-width: 100%;
    }
    .find-education {
      gap: 10px;
    }
    p {
      font-size: 20px;
      line-height: 130%; /* 36.4px */
    }
    input {
      margin-top: 5px;
      padding: 5px 30px;
      height: 51px;
      font-size: 14px;
    }
    .find-education {
      max-width: 100%;
    }
    .subtitle,
    a {
      font-size: 12px;
    }
  }
</style>
