<script>
  export let icon
  export let title
  export let description
  export let id

</script>

<div class="filled-card card">
    <div class="img-container">
        <img src={icon} alt="card-img">
    </div>
    <div>

    <p class="title">{title}</p>
    <p class="description">{description}</p>
    </div>

</div>

<style>
    .filled-card {
        display: flex;
        gap: 30px;
        align-items: flex-start;
    }
    .filled-card * {
        text-align: start;
        line-height: unset;

    }
    .img-container {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        height: 100% !important;
    }
    .title {
        padding: 0 0 10px;
        font-size: 32px;
        font-weight: 500;
    }
    .description{
        font-size: 20px;
        font-weight: 400;
    }
    @media (max-width: 768px) {
        .filled-card {
            flex-direction: column;
            gap: 10px;
        }
        .img-container {
            width: 60px;
            height: 60px;
        }
        .title {
            font-size: 20px;
        }
        .description{
            white-space: unset;
            font-size: 14px;
        }
    }
</style>
