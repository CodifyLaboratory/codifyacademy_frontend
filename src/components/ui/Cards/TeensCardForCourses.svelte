<script>

  export let cardInfo = {}
  import { language } from '../../../stores'

  let activeLang
  language.subscribe(lang => (activeLang = lang))

</script>

    <div class="teensCardForCourses card">
        <div class="image_box mobile">
            <img src={cardInfo.icon} alt="course-icon">
        </div>
        <div class="card-badges">
            <span class="badge">{cardInfo.age_category === 'teens' ? "12-17 лет" : "7-12 лет"}</span>
            <span class="badge">{cardInfo.duration_str}</span>
            {#each cardInfo.study_format as format}
            <span class="badge">{format === 'online' ? 'Онлайн' : 'Офлайн'}</span>
                {/each}
        </div>
        <h4>{cardInfo.title}</h4>
        <div class="image_box">
            <img src={cardInfo.icon} alt="course-icon">
        </div>

        <p class="description">
            {cardInfo.short_description}
        </p>
        <ul class="mobile-description">
            {#each cardInfo.mobile_short_description || [] as text}
            <li>{text}</li>
                {/each}
        </ul>
        <div class="bonuses">
            {#each cardInfo?.additional_details || [] as text}
                <span class="bonus">{text}</span>
            {/each}
        </div>
        <a href={`/teen-course/${cardInfo.id}`}>

        <button class="button contained" >Подробнее</button>
        </a>

    </div>

<style lang="scss">
  .teensCardForCourses {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
     & * {
       text-align: start;
     }
  }

  .image_box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
     &.mobile {
       display: none;
       @media (max-width: 768px) {
         display: flex;
         justify-content: flex-start;
         & img {
           width: 168px;
           height: 168px;
         }
       }
     }
     & img {
      width: 300px;
      height: 300px;
    }
  }

  h4 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .description {
    text-align: start;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .mobile-description {
    text-align: start;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    padding-left: 17px;
     & li {
       line-height: 20px;

     }
    @media (min-width: 769px) {
      display: none;
    }
  }
    .card-badges {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      @media (max-width: 768px) {
        gap: 5px;
      }
    }
    .badge {
        padding: 15px 20px;
        border-radius: 100px;
      font-weight: 400;
        border: 1px solid white;
        color: white;
        font-size: 14px;
      @media (max-width: 768px) {
        font-size: 12px;
        padding: 10px;
      }
    }
    .bonuses {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .bonus {
      text-align: start;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    a {
      margin-top: auto;
    }
    button, a {
      width: 100%;
    }

</style>
