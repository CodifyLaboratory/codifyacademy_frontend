<script>
    export let text = ''
    export let green = false
</script>

<span class="badge {green ? 'green' : null}">{text}</span>

<style lang="scss">
  .green {
    background: #9DFF00 !important;
    border-color: #9DFF00 !important;
    color: black !important;
    font-weight: 500;
  }
  .badge {
    padding: 15px 20px;
    border-radius: 100px;
    border: 1px solid white;
    color: white;
    font-weight: 400;
    line-height: 9px;
    font-size: 14px;
    @media (max-width: 768px) {
        padding: 10px;
        font-size: 12px;
        line-height: 8px;

    }
  }
</style>