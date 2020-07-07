<!-- eslint-disable -->
<template>
  <footer>
    <h1>footer section</h1>
  </footer>
</template>

<script>
/* eslint-disable */
export default {

};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}
</style>
