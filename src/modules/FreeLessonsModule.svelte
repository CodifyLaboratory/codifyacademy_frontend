<script>
    import FreeLessonCard from '../components/free-lesson-card/free-lesson-card.svelte'
    const cards = [
      {
      title: 'Мастер-класс “Как помочь ребенку выбрать актуальную профессию”',
        color: 'rgba(0, 157, 255, 0.50)',

      badges: ['⚡️ Для родителей студентов CODIFY Teens', '🗓️ Каждую пятницу в 10:00 и 16:00', '📍 Офис Codify, 7 мкр, строение 23 '],
        modal_content: 'master_class',
    },
      {
        title: 'Олимпиада для студентов CODIFY Teens',
        badges: ['⚡️ Для детей с 7 до 11 лет', '🗓️ Апрель 2024', '📍 Офис Codify, 7 мкр, строение 23 '],
        modal_content: 'olympiad',
        color: 'rgba(188, 20, 227, 0.50)',

      },
      {
        title: 'Хакатон для студентов CODIFY',
        badges: ['⚡️ Для подростков с 7 до 17 лет', '🗓️ Апрель 2024', '📍 Офис Codify, 7 мкр, строение 23 '],
        modal_content: 'hackathon',
        color: 'rgba(7, 255, 225, 0.50)',

      },

    ]
</script>

<section class="free-lessons">
    <h2 class="container">Приглашаем на бесплатные уроки и мастер-классы</h2>
    <div class="free-lessons_box container">
        {#each cards as card}
            <FreeLessonCard card_info={card} />
            {/each}
    </div>
</section>

<style>
    .free-lessons_box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media (max-width: 1030px) {
        .free-lessons_box {
            width: 100%;
            display: flex;
            gap: 10px;
            margin: 0;
            padding: 5vw;
            overflow: auto;
        }
    }
</style>