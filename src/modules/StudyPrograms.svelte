<script>
    import ProgramCard from "../components/ui/Cards/ProgramCard.svelte";

    const programs = [
      {
        id: 1,
          title: 'Для взрослых',
          subtitle: 'Наши курсы предоставляют знания и навыки, необходимые для успеха в современной рабочей среде',
          badges: ['Развитие профессиональных навыков', 'Погружение в реальные проекты', 'Поддержка в трудоустройстве после курса'],
          link: '/courses',
          courses: ['JavaScript', 'Java', 'Python', 'Тестирование ПО', 'UX/UI дизайн', 'Проектный менеджмент']
      },
      {
        id: 2,
        title: 'Для детей и подростков',
        subtitle: 'Наши курсы развивают технические навыки и креативность. Подготовьте своего ребенка к будущим возможностям 🚀',
        badges: ['Игровое и интерактивное обучение', 'Вдохновляющая среда для обучения', 'Проекты и практические задания'],
        link: '/teens',
        courses: ['Основы программирования', 'HTML, CSS и JavaScript', 'Python', 'Основы графического дизайна']
      },
    ]
</script>
<section id="study-programs" class="study-programs container">
    <h2><span style="color: #009DFF ">
        CODIFY Teens
    </span> — программы обучения для детей и подростков </h2>

        <ProgramCard forTeens program={programs.at(1)} />

</section>
<section class="study-programs container">
    <h2>Программы обучения для взрослых</h2>

        <ProgramCard program={programs.at(0)} />
</section>
