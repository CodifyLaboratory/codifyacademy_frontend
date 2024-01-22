<script context="module">
  import {request} from "../../api";
  export async function preload(page) {
    const { course_id } = page.params;
    const course = await request('get', `children-courses/${course_id}`)

    return { course };
  }
</script>


<script>
  import TeensFreeLesson from "../../modules/teens-modules/TeensFreeLesson.svelte";
  import TeensCourseFirstSections from "../../modules/teens-course-detail-modules/TeensCourseFirstSections.svelte";
  import PageSection from "../../modules/new-design-section-types/PageSection.svelte";
  import TeensCourseProgress from "../../modules/teens-course-detail-modules/TeensCourseProgress.svelte";
  import TeensCourseProgram from "../../modules/teens-course-detail-modules/TeensCourseProgram.svelte";
  import InstaReviews from "../../modules/InstaReviews.svelte";
  import EnrollForCourse from "../../components/HomePageSections/EnrollForCourse.svelte";
  import {onMount} from "svelte";

  let mounted = false
  export let course = {}

  onMount(() => {
    mounted = true
  })
</script>

    <TeensCourseFirstSections course={course}  />
    {#each course?.inform_blocks as block }
        <PageSection type={block.block_type} cards={block.cards} title={block.title} />
    {/each}
    <TeensCourseProgress />
    <TeensCourseProgram cards={course.program_blocks || []} />
    <!--    <TeensStudentProject />-->
    <TeensFreeLesson />
    {#if mounted}
        <InstaReviews />
    {/if}
    <!--    <TeensFAQ />-->
    <EnrollForCourse course_title={course.title} />


<style>
</style>