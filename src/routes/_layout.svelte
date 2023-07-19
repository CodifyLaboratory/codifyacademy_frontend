<script>
  import Footer from '../components/ui/Footer.svelte'
  import LoadingBar from '../components/ui/LoadingBar.svelte'
  import Header from '../components/ui/Header.svelte'
  import Assistant from '../components/Assistant/Assistant.svelte'
</script>

<div class="site">
  <LoadingBar />
  <Header />
  <Assistant />
  <main class="site-content">
    <slot />
  </main>
  <Footer />
</div>
