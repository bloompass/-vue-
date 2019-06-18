<template>
<div>
  <div class="whole">
    <video :src="videoOptions" controls='controls'></video>
  </div>
    <div class="box">
      <ul>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-hi"></span>
        <p>分享</p>
      </router-link>
      <router-link to="/kind" tag="li">
        <span class="iconfont icon-icon--"></span>
        <p>喜欢</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <span class="iconfont icon-yinle"></span>
        <p>下载</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <van-button type="warning" class="bt">用客户端打开</van-button>
      </router-link>
      </ul>
    <van-tabs v-model="active">
      <van-tab title="简介">内容 1</van-tab>
      <van-tab title="评论">内容 2</van-tab>
      <van-tab title="图片">内容 3</van-tab>
    </van-tabs>
    </div>
</div>
</template>

<script>
export default {
  name: 'Play',
  data () {
    return {
      videoOptions: 'http://static.missevan.com/video/201803/02/855360.mp4'
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
  .whole {
    video {
      display: inline-block;
      width:100%;
    }
  }
    .box {
    ul {
      @include flex();
      @include rect(100%, 0.5rem);
      @include flexbox();
      li {
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(0.24rem);
        }
        p {
          @include font-size(0.12rem);
        }
        .bt {
          span {
            @include font-size(0.1rem);
          }
        }
      }
    }
  }
</style>
