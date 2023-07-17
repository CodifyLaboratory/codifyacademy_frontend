<script context="module">
  import Home from './main.svelte'
  import { seo } from '../stores.js'

  export async function preload() {
    await seo.update(state => {
      state.title = 'Codify Academy'
      state.description = 'Курсы Программирования бишкек'
      return state
    })
  }
</script>

<Home />
