<!-- eslint-disable -->
<template>
  <div id="portfolio">
    <div class="logo white">
      <div class="name">
        <div class="txt">portfolio</div>
      </div>
      <div class="subtext">
        <div class="txt">selected projects</div>
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

#portfolio {
    position: relative;
    height: pxToEm(500);

    .logo {
        margin: pxToEm(60) 0;
        top: 0;
    }
}
</style>
