<!-- eslint-disable -->
<template>
  <div id="section">
    <div id="img">
      <div
        class="rellax"
        data-rellax-speed="10"
        :style="{ 'background-image': 'url(' + img + ')' }"
      ></div>
    </div>
    <div id="top-section">
      <div class="opacity">
        <div class="center">
          <div class="icons">
            <div class="icon" :style="{ 'background-image': 'url(' + html_icon + ')' }"></div>
            <div class="icon" :style="{ 'background-image': 'url(' + css_icon + ')' }"></div>
            <div class="icon" :style="{ 'background-image': 'url(' + js_icon + ')' }"></div>
          </div>

          <div class="copy">
            <div class="line">porto, born and raised</div>
            <div class="line">3 years of experience</div>
            <div class="line">geek, artsy, hands-on</div>
          </div>
        </div>

        <div class="mouse">
          <div class="img" :style="{ 'background-image': 'url(' + mouse + ')' }"></div>
          <div class="txt">scroll down</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import img from "../../assets/video-fundo.jpg";
import html_icon from "../../assets/html-icon.svg";
import css_icon from "../../assets/css-icon.svg";
import js_icon from "../../assets/js-icon.svg";
import mouse from "../../assets/mouse.svg";

export default {
  data() {
    return {
      img: img,
      html_icon: html_icon,
      css_icon: css_icon,
      js_icon: js_icon,
      mouse: mouse,
    };
  },
  methods: {
    parallax: function () {
      var rellax = new Rellax(".rellax");
    },
  },
  mounted() {
    this.parallax();
  },
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

#section {
  width: 100%;
  height: 100vh;

  #img {
    width: 100%;
    height: 100%;
    overflow: hidden;

    > div {
      width: 200%;
      height: 200%;
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;

      @media screen and (max-width: 599px) {
        background-size: cover;
      }
    }
  }

  #top-section {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    .opacity {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;

      .center {
        height: pxToEm(350);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .icons {
          width: pxToEm(240);
          display: flex;
          justify-content: space-between;

          .icon {
            width: pxToEm(60);
            height: pxToEm(75);
            background-size: contain;
            background-repeat: no-repeat;
          }
        }

        .copy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .line {
            text-transform: uppercase;
            font-family: "Montserrat-Bold";
            font-size: pxToEm(36);
            text-align: center;
            margin: pxToEm(10) 0;
          }
        }
      }

      .mouse {
        position: absolute;
        bottom: pxToEm(100);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;

        .img {
          width: pxToEm(40);
          height: pxToEm(65);
          background-size: contain;
          background-repeat: no-repeat;
        }

        .txt {
          margin-top: pxToEm(20);
        }
      }
    }
  }
}
</style>
