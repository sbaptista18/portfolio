<!-- eslint-disable -->
<template>
  <div id="project-container">
    <div class="proj" :data-id-proj="p.id" v-for="p in projs" :key="p.id">
      <div class="image" :style="{ 'background-image': 'url(' + p.img_src + ')' }"></div>
      <!-- <video id="desktop" autoplay muted>
        <source :src="p.video_src_dt" type="video/mp4" />
      </video>
      <video id="mobile" autoplay muted>
        <source :src="p.video_src_mobile" type="video/mp4" />
      </video>-->

      <div class="container-info">
        <router-link to="/">
          <div class="close-project-btn">
            <div class="text">close project</div>
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </router-link>

        <div class="title">
          <div class="logo white">
            <div class="name">
              <div class="txt">{{p.name}}</div>
            </div>
            <div class="subtext">
              <div class="txt">{{p.type}}</div>
            </div>
          </div>

          <div class="btn" @click="openDetails(p.id);">
            <img :src="arrow" alt />
            <div class="txt">details</div>
          </div>
        </div>

        <div class="details">
          <div class="top">
            <div class="left">
              <div class="title">about the project</div>
              <div class="line"></div>
            </div>
            <div class="right">
              <div class="text" v-html="p.about"></div>
            </div>
          </div>
          <div class="bottom">
            <div class="left">
              <a class="btn" :href="p.url" target="_blank">
                <img :src="arrow" alt />
                <div class="txt">visit</div>
              </a>
            </div>
            <div class="right">
              <div class="table">
                <div class="column">
                  <div class="header">client</div>
                  <div class="txt">{{p.name}}</div>
                </div>
                <div class="column">
                  <div class="header">tech</div>
                  <div class="txt">{{p.tech}}</div>
                </div>
                <div class="column">
                  <div class="header">release</div>
                  <div class="txt">{{p.release}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import arrow from "../../assets/arrow.svg";
import mockup_harmoni from "../../assets/harmoni-mockup.jpg";
import mockup_anacarolina from "../../assets/anacarolina-mockup.jpg";
// import h_dt_video from "../../assets/videos/h_dt_video.mp4";
// import h_mobile_video from "../../assets/videos/h_mobile_video.mp4";

export default {
  data() {
    return {
      showMain: false,
      title: "",
      arrow,
      projs: [
        {
          id: 1,
          name: "Harmonizando",
          code: "harmonizando",
          year: "2020",
          type: "Company Website",
          about:
            "This project was about building a SPA for an hollistic clinic. It was major upgrade from the old website, since this one loads faster, has less information, and has responsive behaviour.",
          tech: "VueJS, PHP, MySQL",
          release: "August 2020",
          img_src: mockup_harmoni,
          // video_src_dt: h_dt_video,
          // video_src_mobile: h_mobile_video,
          url: "https://beta.harmonizando.com",
        },
        {
          id: 2,
          name: "Ana Carolina Pereira",
          code: "ana-carolina-pereira",
          year: "2020",
          type: "Company Website",
          about:
            "<b>Partnership with <u><a target='_blank' href='https://twobecreative.pt/'>TwoBe Creative</a></u></b><br>This project was about building a SPA for a psychology clinic. It's the client's first website, and it includes a brand new backoffice and a responsive design.",
          tech: "VueJS, PHP, MySQL",
          release: "September 2020",
          img_src: mockup_anacarolina,
          url: "https://beta.anacarolinapereira.pt/",
        },
      ],
    };
  },
  methods: {
    openDetails(id) {
      $('.proj[data-id-proj="' + id + '"] .title').addClass("open-details");
      $('.proj[data-id-proj="' + id + '"] .details').addClass("open-details");
    },
  },
  mounted() {
    var vm = this;
    var location = window.location.href;
    var split_url = location.split("/");
    var ref = split_url[split_url.length - 1];
    var map = Array.prototype.map;

    map.call(vm.projs, function (p) {
      if (ref == p.code) {
        $("#project-container").addClass("open-project");
        $('.proj[data-id-proj="' + p.id + '"]').addClass("open-project");
        $('.proj[data-id-proj="' + p.id + '"] .title').addClass("open-project");
        $(".proj[data-id-proj=" + p.id + "] .close-project-btn").addClass(
          "open-project"
        );
        $("#to-top").css("display", "none");

        vm.$data.title =
          p.name +
          " - " +
          p.type +
          " - Sílvia Baptista - Webdevelopment Portfolio";
        vm.$metaInfo.meta[0].content = p.about;
        vm.$metaInfo.meta[4].content =
          p.name +
          " - " +
          p.type +
          " - Sílvia Baptista - Webdevelopment Portfolio";
        vm.$metaInfo.meta[5].content = p.about;
      }
    });
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content: "",
        },
        { name: "robots", content: "index,follow" },
        {
          property: "og:site_name",
          content: "Sílvia Baptista - Webdeveloper Portfolio",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "",
        },
        {
          property: "og:description",
          content: "",
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

#main-section {
  opacity: 0;
  pointer-events: none;
}

#project-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  &.open-project {
    opacity: 1;
    pointer-events: all;
  }

  .proj {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    z-index: 9999;
    background-color: rgba(46, 46, 46, 1);

    &.open-project {
      opacity: 1;
      pointer-events: all;
    }

    .image {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      opacity: 0.3;
      pointer-events: none;
      background-position: bottom right;
    }

    video {
      width: 100% !important;
      height: auto !important;
      position: absolute;
      opacity: 0.3;
      pointer-events: none;
      object-fit: cover;
      object-position: top;
      left: 0;
      top: 0;
    }

    #desktop {
      display: block;

      @media screen and (max-width: 599px) {
        display: none;
      }
    }

    #mobile {
      display: none;

      @media screen and (max-width: 599px) {
        display: block;
      }
    }

    .container-info {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .close-project-btn {
        width: pxToEm(150);
        height: pxToEm(50);
        position: relative;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: pxToEm(60);
        top: pxToEm(60);
        z-index: 9999;
        cursor: pointer;

        @media screen and (max-width: 599px) {
          right: pxToEm(30);
          top: pxToEm(30);
        }

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

      .btn {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: pxToEm(250);
        height: pxToEm(65);
        border: pxToEm(3) solid #eaeaea;
        margin-top: pxToEm(50);
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
          img {
            transform: translateX(10px);
          }
        }

        img {
          width: pxToEm(45);
          transition: 0.5s;
        }

        .txt {
          text-transform: uppercase;
          font-size: pxToEm(26);
          transition: 0.5s;
        }
      }

      > .title {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: 0.5s;

        &.open-project {
          opacity: 1;
          pointer-events: all;
        }

        &.open-details {
          opacity: 0;
          pointer-events: none;
        }

        .logo {
          margin: pxToEm(60) 0;
          position: relative;
          transform: scale(1.4);
          top: 0;
          left: 0;

          @media screen and (max-width: 599px) {
            transform: scale(0.8);
          }
        }
      }

      .details {
        opacity: 0;
        pointer-events: none;
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        max-width: pxToEm(900);
        width: 100%;
        align-self: center;
        justify-self: center;
        position: relative;
        justify-content: space-between;

        &.open-details {
          opacity: 1;
          pointer-events: all;
        }

        > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .top {
          @media screen and (max-width: 599px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .left {
              display: flex;
              flex-direction: column;
              align-items: center;

              .title {
                text-align: center;
              }
            }

            .right {
              text-align: center;
              margin-top: pxToEm(20);

              .txt {
                text-align: center;
              }
            }
          }

          .left {
            width: pxToEm(125);
            .title {
              font-size: pxToEm(26);
              font-family: "Montserrat-Bold";
              text-transform: uppercase;
            }

            .line {
              height: pxToEm(3);
              width: pxToEm(100);
              background-color: #eaeaea;
              margin-top: pxToEm(10);
            }
          }

          .right {
            width: pxToEm(560);
            .txt {
              font-size: pxToEm(18);
            }
          }
        }

        .bottom {
          height: pxToEm(90);

          @media screen and (max-width: 599px) {
            flex-direction: column;
            margin-top: pxToEm(20);
            align-items: center;
          }

          .left {
            display: flex;
            align-items: center;

            a {
              margin: 0;
            }
          }

          .right {
            width: 100%;

            @media screen and (max-width: 599px) {
              width: 50%;
              margin-top: pxToEm(20);
            }

            .table {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-between;

              @media screen and (max-width: 599px) {
                flex-direction: column;
              }

              .column {
                margin-left: pxToEm(20);
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-left: pxToEm(2) solid #fff;

                @media screen and (max-width: 599px) {
                  border: none;
                  margin: 0;
                  margin-bottom: pxToEm(30);
                }

                > div {
                  margin-left: pxToEm(20);

                  @media screen and (max-width: 599px) {
                    margin: 0;
                  }
                }

                .header {
                  font-family: "Montserrat-Bold";
                  text-transform: uppercase;
                  font-size: pxToEm(18);

                  @media screen and (max-width: 599px) {
                    text-align: center;
                  }
                }

                .txt {
                  @media screen and (max-width: 599px) {
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
