<script>
  import Modal from '../modal/modal.svelte'
  import MasterClassDescription from './master-class-description.svelte'
  import Olympiad from './olympiad-description.svelte'
  import Hackathon from './hackathon-description.svelte'
export let card_info={}
let isModalOpen = false
const setModalOpen = () => {
  isModalOpen = !isModalOpen
}

const modal_content = {
  master_class: MasterClassDescription,
  olympiad: Olympiad,
  hackathon: Hackathon,
}
const CurrentModalContent = modal_content[card_info?.modal_content || 'master_class']

</script>

<div class="card free-lesson-card" style={`background: ${card_info.color}`}>
    <h3>{card_info.title}</h3>
    <div class="badge_box">
        {#each card_info?.badges as badge}
            <p>{badge}</p>
            {/each}
    </div>
    <button class=" button contained free-lesson-card_button" on:click={setModalOpen}>
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16H27" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square" stroke-linejoin="round"/>
            <path d="M19 7L28 16L19 25" stroke="#009DFF" stroke-width="2.2" stroke-linecap="square"/>
        </svg>
        <p>Узнать подробнее</p>
    </button>
    <Modal isOpen={isModalOpen} setModalOpen={setModalOpen}>
            <CurrentModalContent />
    </Modal>
</div>



<style>
    .free-lesson-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .free-lesson-card h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .badge_box p {
        font-size: 15px;
        font-weight: 400;
    }
    .badge_box {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-bottom: 20px;
    }
    .free-lesson-card_button {
        display: flex;
        align-items: center;
        gap: 3px;
        background: white;
        padding: 10px 20px;
        min-height: auto;
        border: none;
        margin-top: auto;
    }
    .free-lesson-card_button p  {
        color: #009DFF;
    }
    @media (max-width: 1030px) {
        .free-lesson-card {
            width: 90vw;
            max-width: 350px;
            flex-shrink: 0;
        }
        .free-lesson-card h3 {
            font-size: 20px;
        }
        .badge_box p {
            font-size: 14px;
        }
    }
</style>