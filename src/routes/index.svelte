<script context="module">
  import Home from './main.svelte'
  import { seo } from '../stores.js'
  import SeoTags from '../components/SeoTags.svelte'

  export async function preload() {
    await seo.update(state => {
      state.title = 'Sapper SEO Trial'
      state.description = 'Home page description'
      return state
    })
  }
</script>

<Home />
