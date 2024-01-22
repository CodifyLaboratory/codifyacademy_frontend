<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import Loading from '../../components/ui/loading.svelte'
  import axios from "axios";
  import {request} from "../../api";

  export let onClick = () => null
  let activeLang = 'ru'
  let message = ''
  let isPost = false
  let isDisabled = false
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
      comment: 'Проф. тест'
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: ['Проф. тест']
            },
            { headers }
          )
          .then( () => {
             onClick().then((res) => {
               localStorage.setItem('test-result', JSON.stringify(res))
               isDisabled=false
               isPost = true
               message = ''
               setTimeout(() => {
                 isPost = false
               }, 5000)
             }).catch(e => {
                 throw e
               })
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

<form  on:submit={submit} class="card  w-100">
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
    <div class={`test-contact-form ${isDisabled || isPost? 'transparent' : ''}`}>
        <p>Вы почти у цели! Узнайте, какая профессия вам подходит.</p>
        <input  required type="text" placeholder={texts[activeLang].findEducation.input_name} />
        <input required type="text" placeholder={texts[activeLang].findEducation.input_phone} />
        <button class="button contained">{'Отправить'}</button>
        <span class="subtitle">{(texts[activeLang].findEducation.subText + ' ' +texts[activeLang].findEducation.subLink)}</span>
    </div>
</form>

<style>
    .card {
        margin: 70px auto 0;
        position: relative;
        max-width: 912px;
        padding: 60px;
    }
    .card.w-100 {
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
    .test-contact-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .test-contact-form.transparent {
        opacity: 0;
        pointer-events: none;
        user-select: none;
        cursor: default;
    }
    p {
        color: var(--white);
        max-width: 570px;
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        line-height: 130%; /* 36.4px */
    }
    input {
        width: 100%;
        max-width: 328px;
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
        max-width: 328px;
        font-weight: 400;
        font-size: 14px;
    }
    .button {
        width: 100%;
        max-width: 328px;
        background: #009DFF;
    }
    @media (max-width: 855px) {
        .card {
            max-width: 100%;
            padding: 30px 15px;
        }
        .test-contact-form {
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
        .test-contact-form {
            max-width: 100%;
        }
        .subtitle {
            font-size: 12px;
        }
    }
</style>
