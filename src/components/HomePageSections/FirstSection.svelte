<script>
  import { onMount } from 'svelte'

  export let h1
  export let enrollButton
  export let testButton
  let y
  let stickyBtn
  let offSetX

  onMount(() => {
    offSetX = stickyBtn.offSetLeft
  })
</script>

<svelte:window bind:scrollY={y} />

<section class="firstSection">
  <div class="container">
    <div>
      <h1>{@html h1}</h1>
      <div class="firstSection__buttons">
        <button
          bind:this={stickyBtn}
          style={`left: ${offSetX}`}
          class={`button contained ${y > 427 && y < 5400 ? 'sticky' : ''}`}>{enrollButton}</button
        >
        <button class="button" style={`margin-left: ${y > 427 ? '238px' : '0'};`}>{testButton}</button>
      </div>
    </div>
    <div class="firstImg">
      <img src="./assets/images/home/homePageGif.gif" alt="world" />
    </div>
  </div>
</section>

<style>
  .firstSection {
    height: 800px;
    background: linear-gradient(109.63deg, #111212 -1.59%, #04051c 105.94%);
  }
  h1 {
    white-space: pre-line;
    font-weight: 300;
    margin-bottom: 40px;
  }
  .firstSection__buttons {
    display: flex;
    gap: 30px;
  }
  .firstImg > img {
    position: relative;
    max-width: 100%;
    right: 100px;
    top: -10px;
  }
  .firstSection > .container {
    display: grid;
    grid-template-columns: 60% auto;
    margin-top: 110px;
  }
  .sticky {
    position: fixed;
    top: 100px;
    z-index: 90;
  }
</style>
