<script>
  import { language } from '../../stores'
  import Badge from "../badge/Badge.svelte";

  let activeLang = 'ru'

  language.subscribe(lang => {
    activeLang = lang
  })


</script>

<div class="first-section-badges">
    <Badge text="Программирование"/>
    <Badge text="Project Management"/>
    <Badge text="Для взрослых"/>
    <Badge text="Для детей"/>
    <Badge text="Для подростков"/>
</div>

<style>
    .first-section-badges {
        display: flex;
        gap: 10px;
        max-width: 594px;
        flex-wrap: wrap;
        margin-top: 40px;
    }
    @media (max-width: 855px) {
        .first-section-badges {
            margin-top: 20px;
        }
        .badge {
            padding: 10px;
            font-size: 12px;
            line-height: 8px;
        }
    }
</style>
