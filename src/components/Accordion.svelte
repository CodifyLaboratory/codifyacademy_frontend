<script>
  import { slide } from 'svelte/transition'
  export let entry
  export let id
  let isOpen = false
  const toggle = () => (isOpen = !isOpen)
</script>

<button on:click={toggle} aria-expanded={isOpen}>
  {id}.
  {entry.module}
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10.5" y="5" width="1" height="12" rx="0.5" fill="#ECEDED" />
    <rect x="5" y="11.5" width="1" height="12" rx="0.5" transform="rotate(-90 5 11.5)" fill="#ECEDED" />
    <rect x="0.5" y="0.5" width="21" height="21" rx="10.5" stroke="#ECEDED" />
  </svg>
</button>
{#if isOpen}
  <ul transition:slide={{ duration: 300 }}>
    <li>{entry.topics}</li>
  </ul>
{/if}

<style>
  button {
    border: none;
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: inherit;
    font-size: 1.25rem;
    cursor: pointer;
    margin: 0;
    text-align: start;
    padding-bottom: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--blue);
    transition: 0.2s all;
  }
  button:hover {
    color: var(--light-blue);
  }

  svg {
    border-radius: 50%;
    transition: 0.2s ease-in all;
    min-width: 22px;
    min-height: 22px;
  }
  ul {
    list-style-type: none;
    padding-bottom: 20px;
    padding-left: 10px;
  }
  li {
    white-space: pre-line;
    line-height: 23px;
  }

  [aria-expanded='true'] svg {
    transform: rotate(0.25turn);
    background-color: rgba(255, 255, 255, 0.384);
  }
</style>
