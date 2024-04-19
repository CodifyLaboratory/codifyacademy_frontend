<script>
  import Modal from '../modal/modal.svelte'
  import Loading from '../../components/ui/loading.svelte'
  import axios from "axios";
    let isModalOpen = false
  let isPost = false
  let isDisabled = false

  let input_value = ''
  const setModalOpen = () => {
    isModalOpen = !isModalOpen

  }

  async function submit(e) {
    isDisabled = true
    e.preventDefault()
    if(input_value) {
        axios
          .post(
            'https://letscodify.io/apis/feedback-mail/',
            {
              platform: 'codifylab.com (academy)',
              message: input_value
            },
          )
          .then(() => {
            isPost = true
            isDisabled = false
            setTimeout(() => {
              isPost = false
              setModalOpen()
            }, 3000)
          })
    }

  }

</script>
<section class="container">

<div class={`program-card card adult teens-program-card`}>
    <div class="left-block">

        <h3>
            Оставьте свой отзыв!
        </h3>
        <p class="subtitle">
            Поделитесь вашими впечатлениями о CODIFY Academy с нашим CEO, Динарой Руслан. Ваш отзыв поможет нам стать лучше!
        </p>
        <div class="btns_box">

        <a  href={'https://wa.me/996708520039'} target="_blank">
            <button class="button">
                Связаться через WhatsApp
            </button>
        </a>
                <button class="button" on:click={setModalOpen}>
                    Оставить отзыв
                </button>
        </div>

    </div>
    <div class="right-block">
        <img width={'220px'} class="teens-img" src={`/assets/email.png`} alt="rocket">
    </div>

</div>
</section>
<Modal isOpen={isModalOpen} setModalOpen={setModalOpen}>
    <div class="modal-card review-modal">
        {#if isDisabled && !isPost}
            <div class="innerLoading">
                <Loading isTransparent vh="20"/>
            </div>
        {/if}
        {#if isPost && !isDisabled}
            <div class="innerLoading">
                <p>{'Отзыв отправлен'}</p>
            </div>
        {/if}
        <h3>Отзыв на почту</h3>
        <textarea on:change={e => input_value = e.target.value} placeholder="Оставьте свой отзыв" rows="4" />
        <div class="modal-btns">
            <button class="button" on:click={setModalOpen}>
                Назад
            </button>
            <button class="button contained" on:click={submit}>
                Отправить
            </button>
        </div>
    </div>
</Modal>

<style>
    .innerLoading {
        background: #08578C;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    textarea {
        border-radius: 20px;
        background: transparent;
        padding: 10px 20px;
        border: 1px solid white;
    }
    textarea::placeholder {
        color: rgba(255, 255, 255, 0.53)
    }
    .modal-btns button {
        min-height: auto;
    }
    .modal-btns {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-end;
    }
.review-modal {
    background: #08578C;
    width: 100dvw;
    max-width: 500px;
    position: relative;
}
    .btns_box {
        display: flex;
        gap: 15px;
        margin-top: 30px;
        flex-wrap: wrap;
    }
    .mobile-link button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        min-height: unset;
    }
    .program-card {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        padding: 60px;
    }
    .program-card:not(.teens-program-card) {
        background: linear-gradient(140deg, rgba(188, 20, 227, 0.10) 0%, rgba(0, 157, 255, 0.10) 100%);

    }
    .program-card > img {
        position: absolute;
        top: 0;
        right: 0;
    }
    .left-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .left-block h3 {
        font-size: 32px;
        font-weight: 500;
        line-height: 130%;
        max-width: 538px;

    }
    .left-block .subtitle {
        line-height: 150%;
        font-size: 16px;
        max-width: 538px;
    }
    .left-block > a {
        display: block;
    }
    .left-block > a button {

    }
    .right-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        min-width: 392px;
    }
    .right-block .course-name {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .right-block .course-name span {
        font-size: 20px;
        font-weight: 500;
    }


    @media (max-width: 1145px) {
        .right-block {
            min-width: 250px;
        }
    }

    @media (max-width: 880px) {
        .teens-img {
            width: 60%;
        }
        .mobile-link {
            display: block !important;
            width: 100%;
        }
        .program-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 15px;

        }
        .teens-program-card {
            flex-direction: column-reverse;
        }
        .teens-program-card button {
            width: 100%;
        }
        .teens-program-card a {
            width: 100%;
        }
        .program-card > img {
            display: none;
        }
        .left-block h3 {
            font-size: 20px;
        }
        .left-block .subtitle {
            font-size: 14px;
        }
        .left-block .badges {
            padding-bottom: 0;
        }
        .left-block > a {
            display: none;
        }
        .right-block {
            gap: 10px;
            align-items: start;
        }
        .right-block .course-name svg {
            width: 16px;
            height: 16px;
        }
        .right-block .course-name span {
            font-size: 14px !important;
        }
    }
</style>