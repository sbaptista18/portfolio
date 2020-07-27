<!-- eslint-disable -->
<template>
  <div id="contact">
    <div class="logo blue">
      <div class="name">
        <div class="txt">contact</div>
      </div>
      <div class="subtext">
        <div class="txt">want to know more?</div>
      </div>
    </div>
    <div class="contacts">
      <div class="email">
        <h2>Email</h2>
        <p>geral@silviabaptista.com</p>
      </div>
      <div class="social">
        <h2>Social Media</h2>
        <div class="icons">
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
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

#contact {
  height: auto;
  position: relative;
  background-color: #707070;
  display: flex;

  .logo {
    margin: pxToEm(60) 0;
    top: 0;
  }

  .contacts {
    max-width: pxToEm(1400);
    width: 100%;
    margin: auto;
    display: flex;
    margin-top: pxToEm(250);
    margin-bottom: pxToEm(50);
    justify-content: space-around;

    > div {
      text-align: center;
    }

    .social {
      div {
        justify-content: space-between;
        display: flex;
      }
    }
  }
}
</style>
