<script>
    import ProgramCard from "../components/ui/Cards/ProgramCard.svelte";

    const programs = [
      {
        id: 1,
          title: 'Для взрослых',
          subtitle: 'Расширьте свои горизонты и начните новую карьеру в мире IT. Наши курсы предоставляют знания и навыки, необходимые для успеха в современной рабочей среде.',
          badges: ['Развитие профессиональных навыков', 'Погружение в реальные проекты', 'Поддержка в трудоустройстве после курса'],
          link: '/courses',
          courses: ['JavaScript', 'Java', 'Python', 'Тестирование ПО', 'UX/UI дизайн', 'Проектный менеджмент']
      },
      {
        id: 2,
        title: 'Для детей и подростков',
        subtitle: 'Помогите вашему ребенку открыть свой потенциал в IT. Наши курсы развивают технические навыки, креативность и готовят к будущим возможностям.',
        badges: ['Игровое и интерактивное обучение', 'Вдохновляющая среда для обучения', 'Проекты и практические задания'],
        link: '/teens',
        courses: ['Основы программирования', 'HTML, CSS и JavaScript', 'Python', 'Основы графического дизайна']
      },
    ]
</script>

<section class="study-programs container">
    <h2>Программы обучения для взрослых и детей</h2>
    {#each programs as program}
        <ProgramCard program={program} />
    {/each}
</section>

<style lang="scss">

</style>