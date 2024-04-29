<script>
  import {request} from "../../api";
  import axios from "axios";
  import Loading from '../../components/ui/loading.svelte'

  export let forMap = false
  let activeLang = 'ru'
  let message = ''
  let isPost = false
  let isDisabled = false

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
      comment: 'Модалка `Олимпиада для студентов'
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: ['Главная страница', 'Модалка `Олимпиада для студентов`']
            },
            { headers }
          )
          .then(() => {
            isPost = true
            isDisabled=false
            message = ''
            if(forMap) {
              window.location.href = "https://codifylab.com/ru/api/download-it-prof-map/"
            }
            setTimeout(() => {
              isPost = false
            }, 5000)
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
<div class="olympiad modal-card">
    <h3>
        Олимпиада для студентов CODIFY Kids
    </h3>
    <b>Хотите испытать свои навыки программирования на деле? Принять участие в увлекательном соревновании? Тогда добро пожаловать на нашу олимпиаду по программированию!</b>
    <p>Это событие создано специально для студентов курсов программирования CODIFY Kids. Здесь вы сможете продемонстрировать свои знания, умения и креативность в программировании.</p>
        <p>Не упустите шанс стать частью этого захватывающего события! Запишитесь на курсы программирования CODIFY Kids уже сегодня и присоединяйтесь к олимпиаде. Давайте вместе создадим что-то удивительное 🚀</p>

    <p>⚡️ Для детей с 7 до 11 лет<br>
        🗓️ Апрель 2024 <br>
        📍 Офис Codify, 7 мкр, строение 23
    </p>

    <form style="position: relative" on:submit={submit}>
        {#if isDisabled && !isPost}
            <div class="innerLoading">
                <Loading isTransparent vh="20"/>
            </div>
        {/if}
        {#if isPost && !isDisabled}
            <div class="innerLoading">
                <p>{message || 'Заявка отправлена'}</p>
            </div>
        {/if}
        <div class="inputs">
            <input  required type="text" placeholder={'Имя'} />
            <input required type="text" placeholder={'Номер телефона'} />
        </div>
        <button class="button contained">Стать студентом CODIFY Kids</button>
        <span class="subtitle">Отправляя заявку, вы даете согласие на обработку персональных данных</span>
    </form>
</div>

<style>
    .innerLoading {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #66127E;
z-index: 1;
    }
    .olympiad {
        background: #66127E;
        max-height: 90dvh;
        overflow: auto;
    }
    .inputs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 20px;
        margin-bottom: 20px;
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
        display: block;
        font-weight: 400;
        font-size: 14px;
        padding-top: 20px;
    }
    .button {
        width: 100%;
    }
    @media (max-width: 768px) {
        .inputs {
            grid-template-columns: 1fr;
            width: 100%;
            gap: 10px;
            margin-bottom: 10px;
        }
        .subtitle {
            padding-top: 10px;
        }
    }
</style>