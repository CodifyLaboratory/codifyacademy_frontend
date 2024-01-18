<script>

import PageSection from "../new-design-section-types/PageSection.svelte";

const cards = [
  {icon: './assets/images/new_icons/coins.png',
  title: 'CodeCoins',
    description: 'Во время обучения дети зарабатывают\n CodeCoins, которые можно обменять на\n стильные аксессуары от CODIFY'
  },
  {icon: './assets/images/new_icons/atom.png',
    title: 'Студенческие лаборатории',
    description: 'Подростки участвуют в «Студенческих\n лабораториях», где они работают в командах\n над реальными проектами'
  },
  {icon: './assets/images/new_icons/monitor.png',
    title: 'Отслеживание прогресса',
    description: 'У всех учеников будет личный кабинет\n в онлайн-платформе Codify LMS, что позволит\n родителям отслеживать успехи своих детей'
  },
  {icon: './assets/images/new_icons/settings.png',
    title: 'Индивидуальный подход',
    description: 'Все уроки записываются, и мы предоставляем\n дополнительную техническую поддержку\n и индивидуальные занятия при необходимости'
  },
  {icon: './assets/images/new_icons/big-star.png',
    title: 'Сертификат',
    description: 'Выпускники нашей Академии получат\n сертификат Министерства Образования\n Кыргызстана'
  },
  {icon: './assets/images/new_icons/money-pig.png',
    title: 'Первый заработок',
    description: 'Лучшие студенты смогут принять участие\n в коммерческих проектах, получая ценный\n опыт и возможность заработка'
  },
]

</script>

<PageSection type="three_cards_transparent" cards={cards} title='Преимущества обучения в CODIFY Академии' />
