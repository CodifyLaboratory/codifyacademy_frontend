<script>
  import LinkedIn from '../ui/socialIcons/linkedin.svelte'
  import Instagram from '../ui/socialIcons/instagram.svelte'
  import Tiktok from '../ui/socialIcons/tiktok.svelte'
  import Youtube from '../ui/socialIcons/youtube.svelte'
  import Telegram from '../ui/socialIcons/telegram.svelte'
</script>

<footer class="container">
  <div class="footer">
    <div class="about footerElement">
      <b>asd</b>
      <p>asdasd</p>
      <p>asdasd</p>
      <p>asdasd</p>
    </div>
    <div class="projects footerElement">
      <b>asd</b>
      <p>asdasd</p>
      <p>asdasd</p>
      <p>asdasd</p>
    </div>
    <div class="contacts footerElement">
      <b>asd</b>
      <p>asdasd</p>
      <p>asdasd</p>
      <p>asdasd</p>
    </div>
    <div class="social footerElement">
      <LinkedIn />
      <Instagram />
      <Tiktok />
      <Youtube />
      <Telegram />
    </div>
  </div>
  <hr />
  <p style="margin: 30px auto; text-align: center">Все права тарам парам</p>
</footer>

<style>
  .footer {
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    margin-top: 160px;
  }
  .footerElement {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .footerElement > b {
    margin-bottom: 20px;
  }
  /* .social > a {
    position: relative;
    width: 32px;
    height: 32px;
  }
  .social > a > svg {
    position: absolute;
    left: 0;
  }

  .social > a:hover > svg:last-child {
    opacity: 1;
  }

  .social > a > svg:last-child {
    z-index: 2;
    opacity: 0;
    transition: 0.2s all;
  } */
</style>
