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
    <h4 class="desktop-title">{cardInfo.title}</h4>
    <div class="image_box">
        <img src={cardInfo.icon} alt="course-icon">
    </div>
    <div>
        <h4 class="mobile-title">{cardInfo.title}</h4>
        <p class="description">
            {cardInfo.short_description}
        </p>
        <!--            <ul class="mobile-description">-->
        <!--                {#each cardInfo.mobile_short_description || [] as text}-->
        <!--                    <li>{text}</li>-->
        <!--                {/each}-->
        <!--            </ul>-->
    </div>

    <div class="bonuses">
        {#each cardInfo?.additional_details || [] as text}
            <span class="bonus">{text}</span>
        {/each}
    </div>
    <a href={`/teen-course/${cardInfo.id}`}>
        <button class="button contained" >Подробнее</button>
    </a>
</div>

<style>
    .mobile-title {
        display: none;
    }
    .teensCardForCourses {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .teensCardForCourses * {
        text-align: start;
    }

    .image_box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image_box.mobile {
        display: none;
    }
    .image_box img {
        width: 300px;
        height: 300px;
    }

    h4 {
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
    }
    .description {
        text-align: start;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .mobile-description {
        text-align: start;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        padding-left: 17px;
    }
    .mobile-description li {
        line-height: 20px;
    }
    .card-badges {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .badge {
        padding: 15px 20px;
        border-radius: 100px;
        line-height: 9px;
        font-weight: 500;
        border: 1px solid white;
        color: white;
        font-size: 14px;
    }
    .bonuses {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: flex-start;
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

    @media (max-width: 768px) {
        .desktop-title {
            display: none;
        }
        .mobile-title {
            display: block;
            padding-bottom: 5px;
        }

        .image_box {
            display: none;
        }
        .image_box.mobile {
            display: flex;
            justify-content: flex-start;
        }
        .image_box.mobile img {
            width: 168px;
            height: 168px;
        }
        h4 {
            font-size: 20px;
        }
        .description {
            font-size: 14px;
        }
        .mobile-description {
            display: none;
        }
        .card-badges {
            gap: 5px;
        }
        .badge {
            line-height: 8px;
            font-size: 12px;
            padding: 10px;
        }
        .bonuses {
            display: none;
        }

    }
</style>
