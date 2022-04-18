<script>
  import AdvantageElement1 from '../ui/advantageElements/AdvantageElement1.svelte'
  import AdvantageElement2 from '../ui/advantageElements/AdvantageElement2.svelte'
  import AdvantageElement3 from '../ui/advantageElements/AdvantageElement3.svelte'
  import AdvantageElement4 from '../ui/advantageElements/AdvantageElement4.svelte'
  import { texts } from '../../localization'
  import { language } from '../../stores'

  let activeLang = 'ru'
  let text = texts[activeLang].homePage

  language.subscribe(lang => {
    activeLang = lang
    text = texts[activeLang].homePage
  })
</script>

<section class="sectionAdvantage">
  <h2>{text.h2.advantages}</h2>
  <div class="advantage__block container">
    <div style="width: 275px; margin-top: 12px;" class="advantageElement">
      <p class="coloredText">{text.advantages[0].title}</p>
      <p>{text.advantages[0].body}</p>
      <AdvantageElement1 />
    </div>
    <div style="width: 230px; margin-top: 25px;" class="advantageElement">
      <p class="coloredText">{text.advantages[1].title}</p>
      <p>{text.advantages[1].body}</p>
      <AdvantageElement2 />
    </div>
    <div style="width: 276px; margin-top: 17px;" class="advantageElement">
      <p class="coloredText">{text.advantages[2].title}</p>
      <p>{text.advantages[2].body}</p>
      <AdvantageElement3 />
    </div>
    <div style="width: 275px;" class="advantageElement">
      <p class="coloredText">{text.advantages[3].title}</p>
      <p>{text.advantages[3].body}</p>
      <AdvantageElement4 />
    </div>
  </div>
</section>

<style>
  .sectionAdvantage {
    padding-bottom: 280px;
  }
  .advantage__block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
    gap: 20px;
  }
  .advantageElement {
    display: flex;
    flex-direction: column;
  }
  .advantageElement > p {
    font-size: 0.9rem;
    white-space: pre-line;
    padding-left: 15px;
  }
  .advantageElement p:first-child {
    font-weight: bold;
    word-break: keep-all;
    padding-bottom: 10px;
    color: var(--green);
    white-space: nowrap;
  }
</style>
