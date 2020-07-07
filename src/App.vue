<template>
  <div id="app">
    <app-header></app-header>
    <router-view id="main-section"></router-view>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1em;
}

@font-face {
  font-family: 'Montserrat-Regular';
  src: url("../src/assets/fonts/Montserrat-Regular.ttf");
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("../src/assets/fonts/Montserrat-Bold.ttf");
}

html,
body {
  margin: 0;
  padding: 0;
  height: auto;
  user-select: none;
  font-size: 16px;
  overflow-y: inherit;
  color: #eaeaea;
  font-family: 'Montserrat-Regular';
  background-color: #2E2E2E;

  &.open {
    overflow-y: hidden;
  }

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    font-size: 11px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: #eaeaea;
  }
}

#app {
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  #main-section {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

.logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;

    .name {
      width: pxToEm(568);
      height: pxToEm(129);
      display: flex;
      align-items: center;
      justify-content: center;

      .txt {
        font-size: pxToEm(36);
        font-family: 'Montserrat-Bold';
        text-transform: uppercase;
      }
    }

    .subtext {
      width: pxToEm(249);
      height: pxToEm(51);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 80%;

      .txt {
        font-size: pxToEm(16);
        font-family: 'Montserrat-Bold';
        text-transform: uppercase;
      }
    }

    &.white {
      .name {
        border: pxToEm(13) solid #0086D4;
        background-color: #eaeaea;

        .txt {
          color: #2e2e2e;
        }
      }

      .subtext {
        background-color: #0086D4;

        .txt {
          color: #eaeaea;
        }
      }
    }

    &.blue {
      .name {
        border: pxToEm(13) solid #2e2e2e;
        background-color: #0086D4;

        .txt {
          color: #2e2e2e;
        }
      }

      .subtext {
        background-color: #eaeaea;

        .txt {
          color: #2e2e2e;
        }
      }
    }
  }

.movement {
  position: relative;
  top: 70px;
  opacity: 0;
  transition: top 1s cubic-bezier(0.15, 0.37, 0.7, 1) 0s,
    opacity 0.4s linear 0.1s;

  &.placed {
    top: 0;
    opacity: 1;
  }

  &:nth-child(2) {
    transition: top 1s cubic-bezier(0.15, 0.37, 0.7, 1) 0.2s,
      opacity 0.5s linear 0.2s;
  }

  &:nth-child(3) {
    transition: top 1s cubic-bezier(0.15, 0.37, 0.7, 1) 0.3s,
      opacity 0.6s linear 0.3s;
  }

  &:nth-child(4) {
    transition: top 1s cubic-bezier(0.15, 0.37, 0.7, 1) 0.4s,
      opacity 0.7s linear 0.4s;
  }
}

.lateral {
  position: relative;
  left: -100px;
  opacity: 0;
  transition: left 1s cubic-bezier(0.15, 0.37, 0.7, 1) 0s,
    opacity 0.4s linear 0.1s;

  &.placed {
    left: 0;
    opacity: 1;
  }
}

.lateralR {
  position: relative;
  right: -100px;
  opacity: 0;
  transition: right 1s cubic-bezier(0.15, 0.37, 0.7, 1) 0s,
    opacity 0.4s linear 0.1s;

  &.placed {
    right: 0;
    opacity: 1;
  }
}
</style>
