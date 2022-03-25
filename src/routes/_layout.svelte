<script>
  import Footer from '../components/ui/Footer.svelte'
  import LoadingBar from '../components/ui/LoadingBar.svelte'
  import Header from '../components/ui/Header.svelte'
</script>

<div class="site">
  <LoadingBar />
  <Header />
  <main class="site-content">
    <slot />
  </main>
  <Footer />
</div>
