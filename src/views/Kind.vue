<template>
  <div class="container">
   <div class="content">
     <ul class="box">
      <router-link to="/home" tag="li">
        <span class="iconfont icon-hi"></span>
        <p>有声漫画</p>
      </router-link>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-icon--"></span>
        <p>广播剧</p>
      </router-link>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-yinle"></span>
        <p>音乐</p>
      </router-link>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-shuimian"></span>
        <p>催眠</p>
      </router-link>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-icon-qiuji"></span>
        <p>催眠</p>
      </router-link>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-shipin"></span>
        <p>催眠</p>
      </router-link>
    </ul>
   </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.box {
  @include rect(auto, 0);
  @include text-align(center);
  li {
    float: left;
    @include rect(1.05rem, 1.05rem);
    @include border-radius(.04rem);
    @include background-color(rgba(189, 184, 184, 0.582));
    @include text-align(center);
    @include box-shadow(0 1px 1px 0);
    @include margin(50px 2.5% 10px);
    span {
      @include rect(.5rem, .5rem);
      @include font-size(0.3rem);
      @include margin(5px 1.2% 5px);
      @include color(rgba(236, 236, 14, 0.918));
    }
    p {
      @include font-size(0.18rem);
    }
  }
}
</style>
