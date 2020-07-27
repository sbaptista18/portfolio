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
        v-for="p in projects"
        :key="p.id"
        :to="p.url"
        :class="{'left': p.id % 2 === 0, 'right': p.id % 2 !== 0}"
      >
        <div class="project">
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
          year: "2020",
          img_src: mockup,
          url: "/",
        },
        {
          id: 2,
          name: "TwoBe Creative",
          year: "2020",
          img_src: mockup,
          url: "/",
        },
        {
          id: 3,
          name: "Harmonizando",
          year: "2020",
          img_src: mockup,
          url: "/",
        },
      ],
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

#portfolio {
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 pxToEm(180);
  padding-bottom: pxToEm(100);

  .line {
    background-color: #fff;
    width: pxToEm(2);
    height: 75%;
    position: absolute;
    left: 50%;
    top: pxToEm(310);
  }

  .logo {
    margin: pxToEm(60) 0;
    top: 0;
  }

  .projects {
    display: flex;
    flex-direction: column;
    margin: 0 pxToEm(80);
    margin-top: pxToEm(310);

    a {
      width: 50%;

      &.right {
        align-self: flex-end;
      }

      .project {
        height: pxToEm(410);
        width: 100%;
        position: relative;
        margin-bottom: pxToEm(50);
        cursor: pointer;

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
          }

          &.right {
            margin-right: pxToEm(50);
            right: 0;

            .year {
              text-align: right;
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

          &.left {
            right: 0;
          }

          &.right {
            left: 0;
          }
        }
      }
    }
  }
}
</style>
