<script>
  import { language } from '../../stores'

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })


</script>

<div class="first-section-badges">
    <span class="badge">Программирование</span>
    <span class="badge">Project Management</span>
    <span class="badge">Для взрослых</span>
    <span class="badge">Для детей</span>
    <span class="badge">Для подростков</span>
</div>

<style>
    .first-section-badges {
        display: flex;
        gap: 10px;
        max-width: 594px;
        flex-wrap: wrap;
        margin-top: 40px;
    }
    .badge {
        padding: 15px 20px;
        border-radius: 100px;
        border: 1px solid white;
        color: white;
        font-size: 14px;
    }
    @media (max-width: 855px) {
        .first-section-badges {
            margin-top: 20px;
        }
        .badge {
            padding: 10px;
            font-size: 12px;
        }
    }
</style>
