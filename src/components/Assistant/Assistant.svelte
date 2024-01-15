<script>
let openedDialog =false
let closed = false
const timeOut = (time) => {
    if (closed) {
        openedDialog= false
    } else {
        setTimeout(()=> {
            openedDialog = !openedDialog
            timeOut(openedDialog ? time : time*4)

        }, openedDialog ? 6000 : time)
    }

}
timeOut(10000)

</script>

<div>
    <div class={`assistant-message ${openedDialog && 'opened'}`}>
            Привет! Я CODIFY ботик. Готов ответить на твои вопросы :)
        <div class='close-button' on:click={() => {closed = true
        openedDialog = false
        }}>

            <img src="./assets/icons/close.svg" alt="close">
        </div>
    </div>
    <a href="https://letscodify.io/?ai=true" target="_blank">
    <img
            class={`assistant-logo`}
            width={70}
            src="./assets/assistant.gif"
            alt="assistant"
    />
    </a>
</div>

<style>
  .assistant-logo {
      cursor: pointer;
      z-index: 1000;
      position: fixed;
      transition: 0.2s all ease;

      bottom: 70px;
      right: 50px;
  }
  .assistant-message {
      background: white;
      border-radius: 15px;
      color: black;
      padding: 5px 15px;
      transition: 0.3s all ease;
      cursor: pointer;
      transform: translate3d(0, 0, 0);
      max-width: 0;
      max-height: 0;
      opacity: 0;
      z-index: 1000;
      position: fixed;
      bottom: 140px;
      right: 20px;
  }
  .assistant-message.opened {
      transform: translate3d(0, 0, 0);
        opacity: 1;
      max-width: 290px;
      max-height: 53px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.49);

  }
  .close-button {
      position: absolute;
      background: var(--blue-main);
      right: -10px;
      top: -10px;
      border-radius: 10px;
      padding: 5px;
      height: 30px;
      width: 30px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.49);

  }
  .close-button img {
      width: 20px;
      height: 20px;
  }
</style>
