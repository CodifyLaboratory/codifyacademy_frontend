<script>
  import Carousel from '../../components/ui/Carousel.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import { onMount } from 'svelte'
  import { SwiperSlide } from 'swiper/svelte'
  import {request} from "../../api";

  let activeLang = 'ru'

  let projects = []
  let text = texts[activeLang].homePage.h2.studentProjects

  language.subscribe(async lang => {
    activeLang = lang
    text = texts[activeLang].homePage.h2.studentProjects

  })
  console.log('projects', projects)


  onMount(() => {
    request('get', 'children-projects/')
      .then((data) => {
        console.log('data', data)
        projects = data
      })
      .catch(error => {
        console.log(error)
      })
  })
</script>

<section class="sectionStudentsProjects container">
    <h2>Работы выпускников курса</h2>
    {#if projects.length}
        <Carousel elemPerPage={1} elemCount={projects.length}>
            {#each projects as project}
                <SwiperSlide>
                    <div style="padding: 0 1px;">
                        <div class="studentsProjects">
                            <div class="studentsProjects__img">
                                <img src={project.cover_image} alt="project-img" />
                            </div>
                            <div class="studentsProjects__info card">
                                <div>
                                    <div class="project_student">
                                        <img src={project.student_photo} alt="student" />
                                        <div>
                                            <p class="name">
                                                {project.student_name}
                                            </p>
                                            <p class="short">
                                                {project.short_description}
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="studentsProjects__description" style="margin-bottom: 20px;">
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            {/each}
        </Carousel>
    {/if}
</section>

<style lang="scss">
    .project_student {
        display: flex;
        gap: 20px;
        & img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          }
      & .name {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 5px;
      }
    }
    h2 {
        text-align: center !important;
    }
    .studentsProjects {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        display: grid;
        grid-template-columns: auto 392px;
        gap: 20px;
    }
    .studentsProjects__img {
        border-radius: 10px;
        overflow: hidden;
    }
    .studentsProjects__info {
        display: flex;
        background: linear-gradient(129.96deg, #07294e -21.19%, rgba(7, 41, 78, 0) 112.21%);

        flex-direction: column;
        justify-content: space-between;
        padding: 40px 20px;
    }
    .studentsProjects__info {
        max-width: 100%;
    }
    .studentsProjects__img > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .studentsProjects__description,
    .studentsProjects__team {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    @media screen and (max-width: 1060px) {
        .studentsProjects {
            grid-template-columns: 1fr;
        }
        .studentsProjects__team {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 30px;
            row-gap: 10px;
        }
    }
    @media screen and (max-width: 850px) {
        .studentsProjects__team {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 650px) {
        .studentsProjects__team {
            grid-template-columns: 1fr;
        }
    }
</style>
