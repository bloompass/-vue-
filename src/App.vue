<template>
  <div id="app">
    <router-view name="header"></router-view>
    <transition name="test">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app, .box {
  @include rect(100%, 100%);
}

#app {
  @include flexbox();
  @include flex-direction(column);
  .header {
  ul {
      @include rect(100%, 100%);
      @include flexbox();
      li{
        &:nth-child(1), &:nth-child(3) {
          @include rect(50px, 100%);
        }
        &:nth-child(2) {
          @include flex();
        }
      }
    }
  ul {
    @include flex();
    @include rect(100%, 0.5rem);
    @include flexbox();
    li{
      @include flex();
      @include rect(auto, 100%);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
      p {
        @include font-size(0.12rem);
        @include text-color(#000);
      }
    }
    }
  }
  .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.5rem);
      @include background-color(#fff);
  }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
  }
  .test-enter {
  transform: translateX(100%)
}
.test-enter-active {
  transition: all 0.5s;
}
.test-enter-to, .test-leave {
  transform: translateX(0)
}
.test-leave-to {
  transform: translateX(-100%)
}
.test-leave-active {
  transition: all 0;
}

}
</style>
