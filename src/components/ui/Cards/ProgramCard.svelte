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

<style lang="scss">
  .mobile-link {
    display: none;
    @media (max-width: 880px) {
      display: block;
      width: 100%;
    }
    & button {
      background: #fff;
      color: black;
      width: 100%;
    }
  }
.program-card {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  & > img {
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 880px) {
      display: none;
    }
  }
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.left-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
   & h3 {
     font-size: 32px;
     font-weight: 400;
     line-height: 130%;
     @media (max-width: 880px) {
       font-size: 20px;
     }
   }
  & .subtitle {
    line-height: 150%;
    font-size: 20px;
    max-width: 640px;
    @media (max-width: 880px) {
      font-size: 14px;

    }
  }
  & .badges {
    padding-top: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    @media (max-width: 880px) {
      padding-bottom: 0;
    }
  }
  & > a {
    margin-top: auto;
    display: block;
    @media (max-width: 880px) {
      display: none;
    }
     & button {
       background: #fff;
       color: black
     }
  }
}
.right-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  min-width: 392px;
  @media (max-width: 1145px) {
    min-width: 250px;
  }
  @media (max-width: 880px) {
    gap: 10px;
  }
   & .course-name {
     display: flex;
     align-items: center;
     gap: 10px;
     @media (max-width: 880px) {
       & svg {
         width: 16px;
         height: 16px;
       }
       & span {
         font-size: 14px !important;
       }
     }
     & span {
       font-size: 20px;
       font-weight: 500;
     }
   }
}
</style>