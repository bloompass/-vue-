<template>
  <div class="bao">
    <div class="bimg">
      <img src="https://static.missevan.com/coversmini/201702/15/fd6a053401fae302e9c1bf93cb9456bb165349.jpg" alt="">
      <button class="bttn">
        <i class="i iconfont icon-bofang">
        <div>
          <div @click="changeOn" :class="isOff?'isOff':'isOn'"></div>
          <audio id="audio" src="https://test.app.bhfae.com:8443/files/file/2177691016.mp3"></audio>
        </div>
        </i>
        </button>
    </div>
    <van-slider v-model="value" @change="onChange" />
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
  data () {
    return {
      value: 3,
      active: 1,
      isOff: true
    }
  },
  mounted () {
    // 自动播放音乐效果，解决微信自动播放问题
    document.addEventListener('touchstart', this.audioAutoPlay, false)
    document.addEventListener('WeixinJSBridgeReady', this.audioAutoPlay, false)
    let oAudio = document.querySelector('#audio')
    oAudio.onended = function () {
      oAudio.load()
      oAudio.play()
    }
  },
  methods: {
    onChange (value) {
      this.$toast('当前播放：' + value)
    },
    changeOn () {
      let oAudio = document.querySelector('#audio')
      if (this.isOff) {
        oAudio.play()
      } else {
        oAudio.pause()
      }
      this.isOff = !this.isOff
    },
    audioAutoPlay () {
      let audio = document.getElementById('audio')
      this.isOff = false
      audio.play()
      document.removeEventListener('touchstart', this.audioAutoPlay)
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.bao {
  .bimg {
    @include rect(3.75rem, 3.25rem);
    position:relative;
    img {
    @include rect(100%, 100%);
    }
    .bttn {
      position:absolute;
      right:.1rem;
      bottom:.2rem;
      opacity:.55;
      width:.48rem;
      border-radius: 50%;
      .i {
        @include font-size(.3rem);
        background:#ccc;
      }
    }
.isOn{
    width: 1.3rem;
    height: 1.3rem;
    position: fixed;
    z-index: 2000;
    top: 2.95rem;
    right: -.09rem;
     -webkit-animation: rotating 1.2s linear infinite;
    animation: rotating 1.2s linear infinite;
}
@keyframes rotating {
    from { -webkit-transform: rotate(0) }
    to { -webkit-transform: rotate(360deg) }
 }
@-webkit-keyframes rotating {
    from { -webkit-transform: rotate(0) }
    to { -webkit-transform: rotate(360deg) }
 }
.isOff{
    width: 1.3rem;
    height: 1.3rem;
    position: fixed;
    z-index: 2000;
    top: 2.95rem;
    right: -.09rem;
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
}
</style>
