<script>
    import Badge from "../../badge/Badge.svelte";

    export let program = {}
</script>

<div class="program-card card">
    <img src="./assets/program-card-element-{program.id}.png" alt=".">
    <div class="left-block">
        
        <h3>
            {program.title}
        </h3>
    <p class="subtitle">
        {program.subtitle}
    </p>
    <div class="badges">
        {#each program.badges as text}
            <Badge text={text} />
        {/each}
    </div>
    <a href={program.link}>
        <button class="button">
        Выбрать курс
    </button>
    </a>
    </div>
    <div class="right-block">
        {#each program.courses as course}
            <div class="course-name">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.75 12H20.25" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M14.25 5.25L21 12L14.25 18.75" stroke="white" stroke-width="2" stroke-linecap="square"/>
                </svg>
                <span>{course}</span>
            </div>
        {/each}
    </div>
    <a class="mobile-link" href={program.link}>
        <button class="button">
            Выбрать курс
        </button>
    </a>
</div>

<style>
  .mobile-link {
    display: none;
  }
  .mobile-link button {
    background: #fff;
    color: black;
    width: 100%;
  }
  .program-card {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .program-card > img {
    position: absolute;
    top: 0;
    right: 0;
  }
  .left-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .left-block h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 130%;
  }
  .left-block .subtitle {
    line-height: 150%;
    font-size: 20px;
    max-width: 640px;
  }
  .left-block .badges {
    padding-top: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .left-block > a {
    margin-top: auto;
    display: block;
  }
  .left-block > a button {
    background: #fff;
    color: black
  }
  .right-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    min-width: 392px;
  }
  .right-block .course-name {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .right-block .course-name span {
    font-size: 20px;
    font-weight: 500;
  }


  @media (max-width: 1145px) {
    .right-block {
        min-width: 250px;
    }
  }

  @media (max-width: 880px) {
    .mobile-link {
        display: block;
    }
    .program-card {
        flex-direction: column;
        align-items: flex-start;
    }
    .program-card > img {
        display: none;
    }
    .left-block h3 {
        font-size: 20px;
    }
    .left-block .subtitle {
        font-size: 14px;
    }
    .left-block .badges {
        padding-bottom: 0;
    }
    .left-block > a {
        display: none;
    }
    .right-block {
        gap: 10px;
    }
    .right-block .course-name svg {
      width: 16px;
      height: 16px;
    }
    .right-block .course-name span {
          font-size: 14px !important;
    }
  }
</style>