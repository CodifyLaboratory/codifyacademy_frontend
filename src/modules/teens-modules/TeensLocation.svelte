<script>

</script>

<section class="location-section container">
    <h2>
        Филиалы нашей Академии
    </h2>
    <div class="location-container">
        <div class="location-block">
            <img class="location-image" src="./assets/images/place-1.png" alt="location">
            <h5 class="title">
                CODIFY Академия в 7 микрорайоне
            </h5>
            <div class="location-info_box">
                <img src="./assets/icons/new-phone.svg" alt="phone">
                <p>
                    +996 500 431 430
                </p>
            </div>
            <div class="location-info_box">
                <img src="./assets/icons/new-location.svg" alt="location">
                <p>
                    г. Бишкек, 7 микрорайон, 23
                </p>
            </div>
            <a href="https://2gis.kg/bishkek/branches/70000001038163167/firm/70000001063954838?m=74.617117%2C42.828746%2F17.62" target="_blank" >

            <button class="button contained">
                Смотреть на карте
            </button>
            </a>

        </div>
        <div class="location-block">
            <img class="location-image" src="./assets/images/place-2.png" alt="location">
            <h5 class="title">
                CODIFY Академия на Исанова
            </h5>
            <div class="location-info_box">
                <img src="./assets/icons/new-phone.svg" alt="phone">
                <p>
                    +996 500 431 430
                </p>
            </div>
            <div class="location-info_box">
                <img src="./assets/icons/new-location.svg" alt="location">
                <p>
                    г. Бишкек, Исанова 105/3, БЦ Destination
                </p>
            </div>
            <a href="https://2gis.kg/bishkek/branches/70000001038163167/firm/70000001038163168?m=74.592833%2C42.877367%2F18.31" target="_blank" >

                <button class="button contained">
                    Смотреть на карте
                </button>
            </a>
        </div>
    </div>
</section>

<style>
    .location-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 20px;
    }
    .location-block {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .location-block .location-image {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 2 / 1;
        margin-bottom: 10px;
        border-radius: 10px;
        overflow: hidden;
    }
    .location-block .title {
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .location-block .location-info_box {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .location-block .location-info_box p {
        color: #009DFF;
        font-size: 20px;
        font-style: normal;
        line-height: normal;
    }
    .location-block a {
        margin-top: auto;
    }
    .location-block a button {
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        .location-container {
            grid-template-columns: 100%;
        }
        .location-block {
            gap: 5px;
        }

        .location-block .title {
            font-size: 20px;
        }

        .location-block .location-info_box p {
            font-size: 14px;
        }
        .location-block .location-info_box img {
            width: 20px;
            height: 20px;
        }
        .location-block a {
            display: none;
            width: 100%;
            margin-bottom: 10px;
        }
        .location-block a button {
            width: 100% !important;
        }
    }
</style>