<!-- eslint-disable -->
<template>
  <div id="menu">
    <div id="logo" class="logo blue">
      <div class="name">
        <div class="txt">Sílvia Baptista</div>
      </div>
      <div class="subtext">
        <div class="txt">Web Developer</div>
      </div>
    </div>

    <div class="menu-btn" @click="openMenu();">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="close-menu-btn" @click="closeMenu();">
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="menu-window">
      <div class="projects-list">
        <router-link to="/">Harmonizando</router-link>
        <router-link to="/">Ana Carolina Pereira</router-link>
        <router-link to="/">TwoBe Creative</router-link>
      </div>
      <div class="about-section">
        <div class="about">
          <div class="title">About Sílvia Baptista</div>
          <div class="text">
            <p>Web Developer aspiring to work on e-commerce platforms, with a great sense of team work.</p>
            <p>When a job is in her hands, she makes sure it's done and delivered with standards.</p>
          </div>
        </div>

        <div class="contact">
          <div class="title">Contact me</div>
          <div class="text">
            <p>
              <a href="mailto:geral@silviabaptista.com">geral@silviabaptista.com</a>
            </p>
          </div>
        </div>

        <div class="social-links">
          <div class="title">Follow me</div>
          <div class="text">
            <p>
              <img :src="fb" alt />
            </p>
            <p>
              <img :src="ig" alt />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";

export default {
  data() {
    return {
      fb,
      ig,
    };
  },
  methods: {
    fadeLogo() {
      $(window).scroll(function () {
        var st = $(this).scrollTop();
        $("#logo").css({
          opacity: 1 - st / 300,
        });
      });
    },
    openMenu() {
      $(".menu-window").addClass("open-menu");
      $(".menu-btn").addClass("open-menu");
      $(".close-menu-btn").addClass("open-menu");
      $("body, html").css("overflow", "hidden");
    },
    closeMenu() {
      $(".menu-window").removeClass("open-menu");
      $(".menu-btn").removeClass("open-menu");
      $(".close-menu-btn").removeClass("open-menu");
      $("body, html").css("overflow", "auto");
    },
  },
  mounted() {
    this.fadeLogo();
  },
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

#menu {
  display: flex;
  justify-content: space-between;
  height: pxToEm(150);
  position: fixed;
  width: 100%;

  @media screen and (max-width: 599px) {
    height: pxToEm(80);
    background-color: rgba(0, 0, 0, 0.9);
  }

  #logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;

    @media screen and (max-width: 599px) {
      transform: translateX(-50%) scale(0.8);
      top: 130%;
    }

    .name {
      width: pxToEm(568);
      height: pxToEm(129);
      border: pxToEm(13) solid #2e2e2e;
      background-color: #0086d4;
      display: flex;
      align-items: center;
      justify-content: center;

      .txt {
        color: #2e2e2e;
        font-size: pxToEm(36);
        font-family: "Montserrat-Bold";
        text-transform: uppercase;
      }
    }

    .subtext {
      width: pxToEm(249);
      height: pxToEm(51);
      background-color: #eaeaea;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 80%;

      .txt {
        color: #2e2e2e;
        font-size: pxToEm(16);
        font-family: "Montserrat-Bold";
        text-transform: uppercase;
      }
    }
  }

  .menu-btn {
    width: pxToEm(45);
    height: pxToEm(35);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 1;
    pointer-events: all;
    position: absolute;
    left: pxToEm(60);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.5s;

    @media screen and (max-width: 599px) {
      left: pxToEm(20);
      top: pxToEm(40);
    }

    &.open-menu {
      opacity: 0;
      pointer-events: none;
    }

    .line {
      background-color: #eaeaea;
      width: 100%;
      height: pxToEm(2);
    }
  }

  .close-menu-btn {
    width: pxToEm(50);
    height: pxToEm(50);
    position: relative;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    left: pxToEm(60);
    top: 50%;
    transform: translateY(-50%);
    z-index: 9999;
    cursor: pointer;
    transition: 0.5s;

    &.open-menu {
      opacity: 1;
      pointer-events: all;
    }

    .line {
      background-color: #eaeaea;
      width: pxToEm(50);
      height: pxToEm(2);
      position: absolute;
      top: 50%;
      left: 0;

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }

  .menu-window {
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(46, 46, 46, 0.95);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;

    &.open-menu {
      opacity: 1;
      pointer-events: all;
    }

    > div {
      width: 30%;
      display: flex;
      flex-direction: column;
      padding-top: pxToEm(190);

      > a {
        font-size: 32px;
        font-family: "Montserrat-Bold";
        margin-bottom: pxToEm(50);
      }

      > div {
        margin-bottom: pxToEm(100);

        .title {
          font-size: 32px;
          font-family: "Montserrat-Bold";
        }

        .text {
          font-size: 26px;
          display: flex;
          flex-direction: column;
        }
      }

      .social-links {
        .text {
          flex-direction: row;

          p {
            img {
              height: 100%;
              margin-right: pxToEm(50);
            }
          }
        }
      }
    }
  }
}
</style>
