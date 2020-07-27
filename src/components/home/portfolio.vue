<!-- eslint-disable -->
<template>
  <div id="portfolio">
    <div class="line"></div>
    <div class="logo white">
      <div class="name">
        <div class="txt">portfolio</div>
      </div>
      <div class="subtext">
        <div class="txt">selected projects</div>
      </div>
    </div>
    <div class="projects">
      <router-link
        :id="p.code"
        :to="p.url"
        class="project"
        v-for="p in projects"
        :key="p.id"
        :class="{'left': p.id % 2 === 0, 'right': p.id % 2 !== 0}"
      >
        <div :data-id-project="p.id" @click="openProject(p.id)">
          <div
            class="img"
            :class="{'right': p.id % 2 === 0, 'left': p.id % 2 !== 0}"
            :style="{ 'background-image': 'url(' + p.img_src + ')' }"
          ></div>
          <div class="text" :class="{'right': p.id % 2 === 0, 'left': p.id % 2 !== 0}">
            <div class="year">{{ p.year }}</div>
            <div class="name">{{ p.name }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import mockup from "../../assets/mockup.jpg";

export default {
  data() {
    return {
      mockup,
      projects: [
        {
          id: 1,
          name: "Ana Carolina Pereira",
          code: "ana-carolina-pereira",
          year: "2020",
          img_src: mockup,
          url: "/project/ana-carolina-pereira",
        },
        {
          id: 2,
          name: "TwoBe Creative",
          code: "twobe-creative",
          year: "2020",
          img_src: mockup,
          url: "/project/twobe-creative",
        },
        {
          id: 3,
          name: "Harmonizando",
          code: "harmonizando",
          year: "2020",
          img_src: mockup,
          url: "/project/harmonizando",
        },
      ],
    };
  },
  methods: {
    openProject(id) {
      $("#project-container").addClass("open-project");
      $(".proj[data-id-proj=" + id + "]").addClass("open-project");
      $(".proj[data-id-proj=" + id + "] .close-project-btn").addClass(
        "open-project"
      );
      $("body, html").css("overflow", "hidden");
      $("#to-top").css("opacity", 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

#portfolio {
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 pxToEm(180);
  padding-bottom: pxToEm(100);

  @media screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(180);
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(180);
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(180);
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    padding: 0 pxToEm(40);
  }

  @media screen and (max-width: 599px) {
    padding: 0 pxToEm(0);
  }

  .line {
    background-color: #fff;
    width: pxToEm(2);
    height: 75%;
    position: absolute;
    left: 50%;
    top: pxToEm(310);

    @media screen and (max-width: 1320px) {
      display: none;
    }
  }

  .logo {
    margin: pxToEm(60) 0;
    top: 0;

    @media screen and (max-width: 599px) {
      transform: translateX(-50%) scale(0.8);
    }
  }

  .projects {
    display: flex;
    flex-direction: column;
    margin: 0 pxToEm(80);
    margin-top: pxToEm(310);

    @media screen and (min-width: 600px) and (max-width: 840px) {
      width: 100%;
      margin: 0;
      margin-top: pxToEm(310);
    }

    @media screen and (max-width: 599px) {
      margin: 0;
      margin-top: pxToEm(310);
    }

    .project {
      height: pxToEm(410);
      position: relative;
      margin-bottom: pxToEm(50);
      cursor: pointer;
      width: 50%;

      @media screen and (max-width: 840px) {
        width: 100%;
      }

      &.right {
        align-self: flex-end;
      }

      &:hover {
        .text {
          color: #0086d4;
          font-weight: bold;
        }

        .img {
          opacity: 1;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;

        &.left {
          margin-left: pxToEm(50);
          left: 0;

          @media screen and (max-width: 599px) {
            left: unset;
            width: 100%;
            margin: 0;
          }

          > div {
            @media screen and (max-width: 599px) {
              text-align: center;
            }
          }
        }

        &.right {
          margin-right: pxToEm(50);
          right: 0;

          @media screen and (max-width: 599px) {
            right: unset;
            width: 100%;
            margin: 0;
          }

          .year {
            text-align: right;
            @media screen and (max-width: 599px) {
              text-align: center;
            }
          }

          > div {
            @media screen and (max-width: 599px) {
              text-align: center;
            }
          }
        }

        .year {
          font-size: pxToEm(16);
          font-family: "Montserrat-Bold";
        }

        .name {
          font-size: pxToEm(36);
          font-family: "Montserrat-Regular";
        }
      }

      .img {
        width: pxToEm(700);
        height: pxToEm(410);
        position: absolute;
        opacity: 0.5;
        transition: 0.5s;
        background-size: contain;
        background-repeat: no-repeat;

        &.left {
          right: 0;

          @media screen and (max-width: 599px) {
            right: unset;
            width: 100%;
            background-size: cover;
            background-position: center;
          }
        }

        &.right {
          left: 0;

          @media screen and (max-width: 599px) {
            right: unset;
            width: 100%;
            background-size: cover;
            background-position: center;
          }
        }
      }
    }
  }
}
</style>
