<script>
  import { request } from '../../api'
  import axios from 'axios'
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
      comment: 'Модалка `Закрытый мастер-класс для родителей',
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: ['Главная страница', 'Модалка `Закрытый мастер-класс для родителей`'],
            },
            { headers }
          )
          .then(() => {
            isPost = true
            isDisabled = false
            message = ''
            if (forMap) {
              window.location.href = 'https://codifylab.com/ru/api/download-it-prof-map/'
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

<div class="master-class modal-card">
  <h3>Закрытый мастер-класс для родителей студентов CODIFY Kids с основателем компании Диной Руслан</h3>
  <b>Тема: Как помочь ребенку выбрать актуальную профессию в век Искусственного интеллекта</b>
  <ul>
    На мастер-классе поделимся:
    <li>Картой актуальных профессий</li>
    <li>Списком полезных приложений и источников информации</li>
    <li>Списком хороших колледжей и университетов</li>
    <li>
      Обсудим самый важный навык каждого человека — «Финансовую грамотность» и как мы обучаем этому наших студентов
    </li>
  </ul>

  <p>
    ПС. Награждение родителей лучших студентов и угощения<br />
    ПСС. И за чашечкой чая хотим получить обратную связь и мнение родителей что мы можем улучшить!
  </p>
  <p>📍 Офис Codify, 7 мкр, строение 23</p>

  <form style="position: relative" on:submit={submit}>
    {#if isDisabled && !isPost}
      <div class="innerLoading">
        <Loading isTransparent vh="20" />
      </div>
    {/if}
    {#if isPost && !isDisabled}
      <div class="innerLoading">
        <p>{message || 'Заявка отправлена'}</p>
      </div>
    {/if}
    <div class="inputs">
      <input required type="text" placeholder="Имя" />
      <input required type="text" placeholder="Номер телефона" />
    </div>
    <button class="button contained">Оставить заявку</button>
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
    background: #08578c;
    z-index: 1;
  }
  .master-class {
    background: #08578c;
    max-height: 90dvh;
    overflow: auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
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
    background-color: #ffffff;
    color: #08578c;
    border: none;
    border-radius: 100px;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .button:hover {
    background-color: #440a52;
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
