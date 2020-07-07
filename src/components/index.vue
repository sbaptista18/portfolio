<!-- eslint-disable -->
<template>
  <div>
    <top-section></top-section>
    <portfolio></portfolio>
    <contact></contact>
  </div>
</template>

<script>
/* eslint-disable */
import topSection from './home/top-section'
import portfolio from './home/portfolio'
import contact from './home/contact'

export default {
  components: {
    topSection: topSection,
    portfolio: portfolio,
    contact: contact
  },
  methods: {
    offsetTop(){
      $('#portfolio').css('margin-top', $('#top-section').height())
    }
  },
  mounted(){
    this.offsetTop();
  }
};
</script>

<style lang="scss" scoped>

</style>
