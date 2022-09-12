<script>
  import CardsOfCourses from '../../components/HomePageSections/CardsOfCourses.svelte'
  import EnrollForCourse from '../../components/HomePageSections/EnrollForCourse.svelte'
</script>

<svelte:head>
  <title>Codify Academy | IT - курсы программирования в Ташкенте</title>
  <meta name="description" content="" />
  <meta
    name="keywords"
    content="курсы программирования ташкент, школа программирования, курсы разработки, IT курсы в Ташкенте"
  />
  <meta property="og:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    property="og:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="og:image" content="https://codifylab.uz/first-image.jpg" />
  <meta property="og:image:alt" content="title image of site" />
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="1024" />
  <meta property="og:site_name" content="codifylab.uz" />
  <meta property="og:locale" content="ru_RU" />
  <meta property="og:type" content="website" />
  <meta property="og:image:secure_url" content="https://codifylab.uz/first-image.jpg" />

  <meta property="twitter:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    property="twitter:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta name="twitter:title" content="Codify Academy | IT - курсы программирования в Ташкенте" />
  <meta
    name="twitter:description"
    content="Курсы программирования в Ташкенте. Обучись актуальной профессии и начни зарабатывать"
  />
  <meta property="twitter:image" content="https://codifylab.uz/first-image.jpg" />
  <meta property="twitter:image:alt" content="title image of site" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Global site tag (gtag.js) - Google Ads: 10891704135 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10891704135"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-10891704135');
  </script>
  
  <!-- Event snippet for Начало оформления покупки conversion page -->
  <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '740755837028287');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1"
         src="https://www.facebook.com/tr?id=740755837028287&ev=PageView
&noscript=1"/>
  </noscript>
  <!-- End Facebook Pixel Code -->
  <script>
    gtag('event', 'conversion', {'send_to': 'AW-10891704135/FLnxCK_zp7gDEMfuyMko'});
  </script>
</svelte:head>

<CardsOfCourses />
<EnrollForCourse />
