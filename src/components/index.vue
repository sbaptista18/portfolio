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
import topSection from "./home/top-section";
import portfolio from "./home/portfolio";
import contact from "./home/contact";

export default {
  components: {
    topSection: topSection,
    portfolio: portfolio,
    contact: contact,
  },
  methods: {
    offsetTop() {
      // $('#portfolio').css('margin-top', $('#top-section').height())
    },
  },
  mounted() {
    // this.offsetTop();

    $("#project-container").removeClass("open-project");
    $(".proj").removeClass("open-project");
    $(".proj .title").removeClass("open-project");
    $(".proj .title").removeClass("open-details");
    $(".proj .details").removeClass("open-details");
    $(".close-project-btn").removeClass("open-project");
    $("body, html").css("overflow", "auto");
    $("#to-top").css("display", "flex");
  },
};
</script>

<style lang="scss" scoped>
</style>
