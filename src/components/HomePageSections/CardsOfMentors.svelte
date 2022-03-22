<script>
  import CardForPeople from '../ui/Cards/CardForPeople.svelte'
  export let mentors
</script>

<div class="mentors">
  {#each mentors as mentor}
    <CardForPeople img={mentor.img} title={mentor.name}>
      <div class="mentor-prof">
        <img src={mentor.profImg} alt={mentor.prof} />
        <b>{mentor.prof}</b>
      </div>
      <p>{mentor.exp}</p>
      <p>{mentor.work}</p>
      <div class="social">
        {#each mentor.social as social}
          <a href="/">
            <img src={social.img} alt={social.img} />
          </a>
        {/each}
      </div>
    </CardForPeople>
  {/each}
</div>

<style>
  .mentors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .mentor-prof {
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 40px;
  }
  .mentor-prof > img {
    height: 100%;
    width: auto;
  }
  .social {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
