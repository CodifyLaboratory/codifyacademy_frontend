<script>
  export let icon
  export let title
  export let description

</script>

<div class="transparent-card">
    <div class="img-container">
        <img src={icon} alt="card-img">

    </div>
    <p class="title">{title}</p>
    <p class="description">{description}</p>
</div>

<style>
    .transparent-card {
        padding: 30px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img-container {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        height: 100% !important;
    }
    .title {
        padding: 20px 0 10px;
        font-size: 24px;
        text-align: center;
        font-weight: 500;
    }
    .description{
        font-size: 16px;
        text-align: center;
        font-weight: 400;
    }
    @media (max-width: 768px) {
        .transparent-card {
            padding: 0;
            align-items: flex-start;
        }
        .img-container {
            width: 60px;
            height: 60px;
        }
        .title {
            font-size: 20px;
            padding: 10px 0 5px;
            text-align: start;
        }
        .description{
            white-space: unset;
            font-size: 14px;
            text-align: start;
        }
    }
</style>
