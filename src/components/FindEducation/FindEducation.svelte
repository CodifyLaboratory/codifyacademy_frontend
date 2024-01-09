<script>
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import Loading from '../../components/ui/loading.svelte'
  import axios from "axios";
  import {request} from "../../api";

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
      comment: 'Поможем подобрать обучение'
    })
      .then(() => {
        axios
          .post(
            'https://academy.codifylab.com/api/crm/leads/?org_id=1',
            {
              first_name: e.target[0].value,
              phone: e.target[1].value,
              email: e.target[2].value ? e.target[2].value : null,
              extra_comments: ['Поможем подобрать обучение']
            },
            { headers }
          )
          .then(() => {
            isPost = true
            message = ''
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

<form  on:submit={submit} class="card">
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
    <div class={`find-education ${isDisabled? 'transparent' : ''}`}>
    <p>{texts[activeLang].findEducation.title}</p>
    <input  required type="text" placeholder={texts[activeLang].findEducation.input_name} />
    <input required type="text" placeholder={texts[activeLang].findEducation.input_phone} />
    <button class="button contained">{texts[activeLang].findEducation.button}</button>
    <span class="subtitle">{texts[activeLang].findEducation.subText} <a>{texts[activeLang].findEducation.subLink}</a></span>
    </div>

</form>

<style>
    .card {
        position: relative;
        max-width: 392px;

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
    .find-education {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .find-education.transparent {
        opacity: 0;
    }
    p {
        color: var(--white);
        font-size: 28px;
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
        font-weight: 300;
        font-size: 14px;
        cursor: pointer;
        color: #009DFF;
        text-decoration: underline;
    }
    a:hover {
        color: var(--blue);

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
        .subtitle, a {
            font-size: 12px;
        }
    }
</style>
