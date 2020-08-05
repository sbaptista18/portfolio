<!-- eslint-disable -->
<template>
  <a id="to-top" @click="backToTop()">
    <div id="btt-btn">
      <div id="arrow">
        <i class="arrow up"></i>
      </div>
    </div>
  </a>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    backToTop() {
      $("html, body").animate({ scrollTop: 0 }, 500);
    },
  },
  mounted() {
    var btn = $("#to-top");

    window.onscroll = function (ev) {
      if (
        window.innerHeight + window.scrollY >
        document.documentElement.offsetHeight
      ) {
        btn.css({ opacity: 1 });
      } else {
        btn.css({ opacity: 0 });
      }
    };
  },
};
</script>

<style lang="scss" scoped>
//colors
$white: #fff;
$black: #000;
$dk-gray-1: #393939;
$dk-gray-2: #464646;
$dk-gray-3: #707070;
$lt-gray: #f6f6f6;
$turquiose: #0babc5;

@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

//paddings and margins
$pd-desktop: 0 pxToEm(130);
$mg-desktop: 0 pxToEm(40);

//circle
$circle: 50%;

#to-top {
  opacity: 0;
  position: fixed;
  width: pxToEm(60);
  height: pxToEm(60);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  color: #eaeaea;
  bottom: pxToEm(50);
  right: pxToEm(50);
  z-index: 99999999;
  transition: 0.5s;

  @media screen and (max-width: 599px) {
    bottom: pxToEm(10);
    right: pxToEm(10);
  }

  #btt-btn {
    width: pxToEm(60);
    height: pxToEm(60);
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    cursor: pointer;
    transition: 0.5s;
    background-color: #2e2e2e;
    border-radius: $circle;
    border: pxToEm(1) solid #eaeaea;

    &:hover {
      color: #eaeaea;
      background-color: #0086d4;

      #arrow {
        margin-top: pxToEm(10);

        .arrow {
          border: solid #eaeaea;
          border-width: 0 pxToEm(3) pxToEm(3) 0;
          transition: 0.5s;
        }
      }
    }

    #arrow {
      text-align: center;
      margin-top: pxToEm(10);

      .arrow {
        border: solid #0086d4;
        border-width: 0 pxToEm(3) pxToEm(3) 0;
        display: inline-block;
        padding: pxToEm(5);
        transition: 0.5s;

        &.up {
          transform: rotate(-135deg);
          -webkit-transform: rotate(-135deg);
        }
      }
    }
  }
}
</style>
