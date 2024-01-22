<script>
    export let questions = []
    export let gotoResult = () => null
    export let backToTest = () => null
    let current_index = 0
    let answers = []
</script>

<div class="questions-container">
    <svg on:click={() => current_index ? current_index -= 1 : backToTest()} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.16799 14.7652C5.20556 14.6457 5.23453 14.5719 5.23453 14.5719L14.6933 5.38442C15.221 4.87186 16.0765 4.87186 16.6042 5.38442C17.1319 5.89699 17.1319 6.72801 16.6042 7.24058L9.64525 14H24.6875C25.4124 14 26 14.6716 26 15.5C26 16.3284 25.4124 17 24.6875 17H9.64525L16.6042 23.7594C17.1319 24.272 17.1319 25.103 16.6042 25.6156C16.0765 26.1281 15.221 26.1281 14.6933 25.6156L5.23453 16.4281C5.03444 16.2337 4.98609 15.9199 5.00317 15.6051C5.00107 15.5704 5 15.5353 5 15.5C5 15.233 5.06102 14.9824 5.16799 14.7652Z" fill="white"/>
    </svg>
    <div class="questions-progress">
        {#each questions as question, index}
            <div class="progress {current_index >= index ? 'active' : ''}"></div>
        {/each}
    </div>
    {#if questions[current_index]}
    <div class="card question-card">
        <h3>{questions[current_index]?.question_text}</h3>
        <div class="answers-box">

        {#each questions[current_index]?.answer_options as answer}
            <div class="answer" on:click={() => answers[current_index] = {answer_option_id : answer.id, id: questions[current_index].id}}>
                {#if answers[current_index] && answers[current_index].answer_option_id === answer.id}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#009DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#009DFF" stroke="#009DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {:else }
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CBCCCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    {/if}
                <p>{answer.answer_text}</p>
            </div>
        {/each}
        </div>

    </div>
    {/if}
    <button disabled={!answers[current_index]} class="button test-button" on:click={() => {
      if(current_index < questions.length - 1) {
        current_index = current_index + 1
      } else {
        gotoResult(answers)
      }

    }}>
        Далее
    </button>
</div>

<style>
    .questions-container {
        flex: 1;
        max-width: 912px;
        margin: 0 auto;
    }
    .questions-container > svg {
    }
    .questions-progress{
        display: flex;
        padding: 20px 0 40px;
        gap: 10px;
        width: 100%;
        max-width: 912px;
    }
    .questions-progress .progress {
        height: 6px;
        border-radius: 7px;
        background: rgba(0, 157, 255, 0.40);
        width: 100%;
    }
    .questions-progress .progress.active {
        background: #009DFF;
    }
    .question-card {
        width: 100%;
        padding: 60px;
    }
    .question-card h3 {
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        text-align: center;
        padding-bottom: 30px;
    }
    .question-card .answers-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    .answer {
        background: white;
        border-radius: 10px;
        padding: 20px 20px 20px 15px;
        display: flex;
        align-items: start;
        gap: 8px;
        cursor: pointer;
    }
    .answer svg {
        flex-shrink: 0;
    }
    .answer p {
        padding-top: 3px;
        color: #132150;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }
    .test-button {
        margin: 40px auto 0;
        background: #009DFF;
    }
    .test-button:disabled {
        opacity: 0.8;
        pointer-events: none;
        cursor: auto;
    }


    @media (max-width: 768px) {
        .questions-container > svg {
            width: 24px;
            height: 24px;
        }
        .questions-progress{
            padding: 10px 0 20px;
        }
        .question-card {
            padding: 30px 15px 15px;
        }
        .question-card h3 {
            font-size: 20px;
            padding-bottom: 15px;
        }
        .question-card .answers-box {
            grid-template-columns: 100%;
        }
        .answer svg {
            width: 16px;
            height: 16px;
        }
        .answer p {
            font-size: 14px;
            padding-top: 1px;
        }
        .test-button {
            margin: 10px auto;
        }
    }
</style>