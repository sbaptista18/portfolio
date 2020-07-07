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

    <div class="menu-btn">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="close-menu-btn">
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="close-project-btn">
      <div class="text">close project</div>
      <div class="circle">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    fadeLogo() {
      $(window).scroll(function() {
        var st = $(this).scrollTop();
        $("#logo").css({
            'opacity' : 1 - st/300
        });
      });
    }
  },
  mounted() {
    this.fadeLogo();
  }
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

  #logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;

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

  .close-project-btn {
    width: pxToEm(150);
    height: pxToEm(50);
    position: relative;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: pxToEm(60);
    top: 50%;
    transform: translateY(-50%);

    &.open-project {
      opacity: 1;
      pointer-events: all;
    }

    .text {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: pxToEm(14);
    }

    .circle {
      border: pxToEm(2) solid #eaeaea;
      border-radius: 50%;
      width: pxToEm(46);
      height: pxToEm(46);
      position: absolute;
      right: 0;

      .line {
        background-color: #eaeaea;
        width: pxToEm(30);
        height: pxToEm(2);
        position: absolute;
        top: 50%;
        left: 20%;

        &:nth-child(1) {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
