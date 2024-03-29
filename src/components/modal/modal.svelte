<script>
    export let isOpen = false
     export let setModalOpen = () => isOpen = !isOpen

</script>

<div class={`modal ${isOpen ? 'opened' : ''}`} on:click={setModalOpen}>
    <div style="position: relative" on:click={(e) => e.stopPropagation()}>
        <div class="close-btn" on:click={setModalOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14.0625 3.9375L3.9375 14.0625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.0625 14.0625L3.9375 3.9375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <slot />
    </div>
</div>

<style>
    .modal {
        z-index: 1000000;
        background: transparent;
        position: fixed;
        width: 0;
        height: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        overflow: hidden;
        transition: 0.3s opacity;
    }
    .modal.opened {
        background: rgba(0, 0, 0, 0.63);
        opacity: 1;
        width: 100vw;
        height: 100vh;
        overflow: unset;
        pointer-events: all;
    }
    .close-btn {
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
        z-index: 10;
    }
</style>

