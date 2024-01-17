<script context="module">
  import {request} from "../api";
  export async function preload() {
    const questions = await request('get', `prof-test/questions`)
    return { questions };
  }
</script>

<script>
 import StartTest from "../modules/test-modules/StartTest.svelte";
 import TestQuestions from "../modules/test-modules/TestQuestions.svelte";
 import ContactForm from "../modules/test-modules/ContactForm.svelte";
 import {goto} from "@sapper/app";
 let is_test = false
 let result_questions = null
 export let questions = []
const sendTest = async () => {
   try {
     const res = await request('post', 'prof-test/submit-answers/', null, result_questions)
     goto('test-result')
     return res
   }catch (e) {
     throw e
   }
}
</script>
<div class="test-page container">
    <div class="test-header">
        <a href="/">
            <img width="136px" height="28px" src="./assets/icons/logo.webp" alt="logo" />
        </a>
        <p>Карьерный тест</p>
    </div>
    {#if is_test}
        <TestQuestions gotoResult={(result) => {
          result_questions = result
          is_test = false
        }} backToTest={() => is_test=false} questions={questions} />
    {:else if result_questions}
        <ContactForm onClick={sendTest} />
    {:else}
        <StartTest onClick={() => is_test = true} />
    {/if}
    <p class="test-footer">© 2023 Codify Academy. All Rights Reserved</p>
</div>

<style lang="scss">
  .test-footer {
    padding: 15px 0;
    width: 100%;
    text-align: center;
  }
.test-page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
.test-header {
  padding-top: 30px;
  padding-bottom: 30px;
  background: #111119;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    & p {
      display: none;
    }
  }
}
</style>