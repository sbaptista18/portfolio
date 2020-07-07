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
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

#contact {
    height: pxToEm(400);
    position: relative;
    background-color: #707070;

    .logo {
        margin: pxToEm(60) 0;
        top: 0;
    }
}
</style>
