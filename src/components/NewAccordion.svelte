<script>
  import { slide } from 'svelte/transition'
  export let entry
  export let id
  let isOpen = false
  const toggle = () => (isOpen = !isOpen)
</script>

<button on:click={toggle} aria-expanded={isOpen}>
    {entry.question}
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15L20 25L30 15" stroke="#009DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</button>
{#if isOpen}
    <p transition:slide={{ duration: 300 }}>{entry.answer}</p>
    <!--  <ul transition:slide={{ duration: 300 }}>-->
    <!--    <li>{entry.topics}</li>-->
    <!--  </ul>-->
{/if}

<style>
    button {
        border: none;
        background: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: inherit;
        cursor: pointer;
        margin: 0;
        text-align: start;
        padding-bottom: 20px;
        padding-top: 16px;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        transition: 0.2s all;
    }
    button:not(:first-child) {
        border-top: 1px solid var(--blue);
    }
    button:hover {
        color: var(--light-blue);
    }

    svg {
        border-radius: 50%;
        transition: 0.2s ease-in all;
        flex-shrink: 0;
    }

    p {
        margin-bottom: 30px;
        font-size: 20px;
    }


    [aria-expanded='true'] svg {
        transform: rotate(0.5turn);
    }
    @media (max-width: 768px) {
        svg {
            width: 32px;
            height: 32px;
        }
        button {
            font-size: 16px;
            padding-bottom: 10px;
            padding-top: 10px;
        }
        p {
            font-size: 14px;
            margin-bottom: 10px;
        }
    }
</style>
