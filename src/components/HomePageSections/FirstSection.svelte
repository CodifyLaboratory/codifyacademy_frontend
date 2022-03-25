<script>
  export let h1
  export let enrollButton
  export let testButton
</script>

<section class="firstSection">
  <div class="container">
    <div>
      <h1>{@html h1}</h1>
      <div class="firstSection__buttons">
        <button class="button contained">{enrollButton}</button>
        <button class="button">{testButton}</button>
      </div>
    </div>
    <div />
  </div>
</section>

<style>
  .firstSection {
    min-height: 600px;
    height: 90vh;
    background: black;
    width: 100%;
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
  .firstSection > .container {
    display: grid;
    grid-template-columns: 60% auto;
  }
</style>
