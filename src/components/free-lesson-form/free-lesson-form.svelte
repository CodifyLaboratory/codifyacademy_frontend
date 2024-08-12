<script>
  import { language } from '../../stores'
  import Loading from '../../components/ui/loading.svelte'
  import axios from 'axios'
  import { request } from '../../api'

  export let isBig = false
  export let maxWidth = 600
  export let comment = ''
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
    const headers = {
      Authorization: 'b8faa2c98db86c13fadc2e339bf33743',
      'content-Type': 'application/json',
    }
    isDisabled = true
    request('post', 'contact-form/submit/', null, {
      name: e.target[0].value,
      phone_number: e.target[1].value,
      comment: 'Бесплатное пробное занятие',
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: ['Детские курсы', 'Бесплатное пробное занятие', comment],
            },
            { headers }
          )
          .then(() => {
            isPost = true
            isDisabled = false
            isMessageVisible = true
            message = 'Заявка отправлена'
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

<form on:submit={submit} class="card" style={`max-width: ${maxWidth}px`}>
  {#if isDisabled && !isPost}
    <div class="innerLoading">
      <Loading isTransparent vh="20" />
    </div>
  {/if}
  {#if isMessageVisible && isPost}
    <div class="innerLoading">
      <div style="display: flex; justify-content:space-between; width:100%; padding:0 20px;">
        <p>{message || 'Заявка отправлена'}</p>
        <button class="close-button" on:click={closeMessage}>X</button>
      </div>
    </div>
  {/if}
  {#if !isPost || !isMessageVisible}
    <div class={`find-education ${isBig ? 'is_big' : ''} ${isDisabled || isPost ? 'transparent' : ''}`}>
      <p>
        {#if isBig}
          Не просто учим, а закладываем навыки для успешного будущего
        {:else}
          Запишитесь на бесплатный пробный урок
        {/if}
      </p>
      <div class={`find-education_form`}>
        <input required type="text" placeholder="Имя" />
        <input required type="text" placeholder="Номер телефона" />
        <button class="button contained">Оставить заявку</button>
      </div>

      <span class="subtitle">{'Отправляя заявку, вы даете согласие на обработку персональных данных.'}</span>
    </div>
  {/if}
</form>

<style>
  .card {
    position: relative;
    justify-self: flex-end;
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
  .find-education,
  .find-education_form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .find-education.transparent {
    opacity: 0;
  }

  .is_big .find-education_form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  p {
    color: var(--white);
    font-size: 24px;
    font-weight: 500;
    line-height: 130%; /* 36.4px */
  }
  .is_big p {
    font-size: 32px;
    max-width: 650px;
  }
  input {
    border: 1px solid white;
    padding: 11px 30px;
    height: 60px;
    background: transparent;
    color: white;
    font-size: 16px;
    font-weight: 400;
    border-radius: 100px;
  }
  input::placeholder {
    color: white;
    opacity: 0.7;
  }
  .subtitle {
    font-weight: 400;
    font-size: 14px;
  }
  .close-button {
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
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
  @media (max-width: 855px) {
    .card {
      max-width: 100% !important;
    }
    .find-education,
    .find-education_form {
      gap: 10px;
    }
    .is_big .find-education_form {
      display: grid;
      grid-template-columns: 100%;
      width: 100%;
    }
    p {
      font-size: 20px;
      line-height: 130%; /* 36.4px */
    }
    .is_big p {
      font-size: 24px;
      max-width: 650px;
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
