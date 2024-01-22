<script>
  import { language } from '../../stores'
    export let course
  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })


</script>

<div class="card-badges">
    <span class="badge">{course.age_category === 'teens' ? "12-17 лет" : "7-12 лет"}</span>
    <span class="badge">{course.duration_str}</span>
    {#each course.study_format as format}
        <span class="badge">{format === 'online' ? 'Онлайн' : 'Офлайн'}</span>
    {/each}
</div>

<style>
    .card-badges {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .badge {
        padding: 15px 20px;
        border-radius: 100px;
        font-weight: 500;
        border: 1px solid white;
        color: white;
        line-height: 9px;
        font-size: 14px;
    }
    @media (max-width: 768px) {
        .card-badges {
            gap: 5px;
        }
        .badge {
            font-size: 12px;
            padding: 10px;
            line-height: 8px;

        }
    }
</style>
