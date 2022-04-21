<script>
  import Carousel from '../ui/Carousel.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'
  import { onMount } from 'svelte'
  import { SwiperSlide } from 'swiper/svelte'
  import axios from 'axios'

  let activeLang = 'ru'

  let projects = []
  let text = texts[activeLang].homePage.h2.studentProjects

  language.subscribe(async lang => {
    activeLang = lang
    text = texts[activeLang].homePage.h2.studentProjects

    if (projects.length) {
      axios
        .get(`https://178.62.241.156/${activeLang}/api/projects/`)
        .then(({ data }) => {
          projects = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  })

  onMount(async () => {
    axios
      .get(`https://178.62.241.156/${activeLang}/api/projects/`)
      .then(({ data }) => {
        projects = data
      })
      .catch(error => {
        console.log(error)
      })
  })
</script>

<section class="sectionStudentsProjects container">
  <h2>{text}</h2>
  {#if projects.length}
    <Carousel elemPerPage={1} elemCount={projects.length}>
      {#each projects as project}
        <SwiperSlide>
          <div style="padding: 0 1px;">
            <div class="studentsProjects">
              <div class="studentsProjects__img">
                <img src={project.image} alt="project-img" />
              </div>
              <div class="studentsProjects__info">
                <div>
                  <b>{project.title}</b>
                  <hr />
                  <div class="studentsProjects__description" style="margin-bottom: 20px;">
                    <img style="margin-bottom: 5px;" src="./assets/icons/StudentsProjects/Digital.svg" alt="digital" />
                    <p>
                      {project.description}
                    </p>
                  </div>
                </div>
                <div class="studentsProjects__description">
                  <img style="margin-bottom: 5px;" src="./assets/icons/StudentsProjects/Workgroup.svg" alt="digital" />
                  <div class="studentsProjects__team">
                    {#each project.member as member}
                      <p>{member.role}</p>
                    {/each}
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

<style>
  .studentsProjects {
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(129.96deg, #07294e -21.19%, rgba(7, 41, 78, 0) 112.21%);
    width: 100%;
    display: grid;
    grid-template-columns: minmax(720px, 70%) auto;
  }
  .studentsProjects__info {
    display: flex;
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
