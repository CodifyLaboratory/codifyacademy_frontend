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
  import TeensStudentProject from "../../modules/teens-modules/TeensStudentProject.svelte";
  import InstaReviews from "../../modules/InstaReviews.svelte";
  import TeensFAQ from "../../modules/teens-modules/TeensFAQ.svelte";
  import EnrollForCourse from "../../components/HomePageSections/EnrollForCourse.svelte";

  export let course = {}
</script>

    <TeensCourseFirstSections course={course}  />
    {#each course?.inform_blocks as block }
        <PageSection type={block.block_type} cards={block.cards} title={block.title} />
    {/each}
    <TeensCourseProgress />
    <TeensCourseProgram cards={course.program_blocks || []} />
    <TeensStudentProject />
    <TeensFreeLesson />
    <InstaReviews />
<!--    <TeensFAQ />-->
    <EnrollForCourse />


<style lang="scss">

</style>