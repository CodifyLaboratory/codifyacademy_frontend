<script>
  export let review = ''

  let height = 600

  if(review.at(-1) === '/') {
    review = review.slice(0 , -1)
  }
</script>

<div class="review-box" style={`height: calc(${height}px - 110px);`}>
    <a href="https://www.instagram.com/codifylab.kg" target="_blank">

    <div class="top-block">
        <img src="./assets/icons/codify-insta-logo.png" alt="logo">
        <p>codifylab.kg</p>
    </div>
    </a>

    <div class="bottom-block">
        <p>Еще больше в Instagram</p>
    </div>
    <div bind:clientHeight={height} class="ig_block">

        <blockquote
                class="instagram-media"
                data-instgrm-permalink="{review}/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style="background:#000; border:0; border-radius:3px; max-width:540px; min-width:326px; padding:0; width:100%;;"
        >
            <div style="padding: 24px;">
                <a
                        href="{review}/?utm_source=ig_embed&amp;utm_campaign=loading"
                        style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
                        target="_blank"
                >
                    <div style=" display: flex; flex-direction: row; align-items: center;">
                        <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                            <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                            <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                        </div>
                    </div>
                    <div style="padding: 19% 0;"></div>
                    <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                    </div>
                    <div style="padding-top: 8px;">
                        <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
                            Посмотреть эту публикацию в Instagram
                        </div>
                    </div>
                    <div style="padding: 12.5% 0;"></div>
                    <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                        <div>
                            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
                            <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
                            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                        </div>
                        <div style="margin-left: 8px;">
                            <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
                            <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
                        </div>
                        <div style="margin-left: auto;">
                            <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
                            <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
                            <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                        <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
                        <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
                    </div>
                </a>
                <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
                    <a
                            href="{review}/?utm_source=ig_embed&amp;utm_campaign=loading"
                            style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
                            target="_blank"
                    >
                        КУРСЫ ПРОГРАММИРОВАНИЯ БИШКЕК (@codifylab.kg)
                    </a>
                </p>
            </div>
        </blockquote>
    </div>

    <script async src="//www.instagram.com/embed.js"></script>
</div>

<style lang="scss">
  .review-box {
    position: relative;
    overflow: hidden;
    min-width: 326px;
    & .ig_block {
      width: calc(100% + 2px);
      position: relative;
      left: -1px;
    }
    & .top-block {
      position: absolute;
      display: flex;
      gap: 10px;
      align-items: center;
      width: 100%;
      height: 56px;
      padding: 10px;
      z-index: 1;
      background: #111119;
      cursor: pointer;
      & img {
        width: 40px;
        height: 40px;
      }
      & p {
        cursor: pointer;

        font-weight: 500;
      }

    }
    & .bottom-block {
      position: absolute;
      height: 45px;
      width: 100%;
      padding: 0 12px;
      display: flex;
      align-items: center;
      //opacity: 0;
      z-index: 1;
      pointer-events: none;
      left: 0;
      bottom: 0;
      background: #111119;
      & p {
        color: rgb(0, 149, 246);
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
</style>
