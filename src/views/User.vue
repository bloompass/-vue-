<template>
  <div class="container">
   <div class="content">
     <div class="about">
      <span class="iconfont icon-touxiang"></span>
      <router-link to="/login" tag="button">点击登录</router-link>
      <i class="iconfont icon-icon1"></i>
     </div>
     <ul class="abul">
       <li class="abli">
        <span class="iconfont icon-1"></span>
        <span>M-主站</span>
        <i class="iconfont icon-icon1"></i>
       </li>
       <li class="abli">
        <span class="iconfont icon-huatong"></span>
        <span>M-直播</span>
        <i class="iconfont icon-icon1"></i>
       </li>
       <li class="abli">
        <span class="iconfont icon-qian"></span>
        <span>M-钱包</span>
        <i class="iconfont icon-icon1"></i>
       </li>
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
.about {
  @include rect(3.75rem, 1.1rem);
  background: #3d3d3d;
  color:#fff;
  span {
    @include margin(30px 3.2% 30px 20px);
    @include text-align(content);
    font-size:24px;
  }
  button {
    background: none;
    color:#fff;
    border:0;
    font-size:24px;
  }
  i {
    float:right;
    margin-right:.2rem;
    font-size:18px;
  }
}
.content{
.abul {
  padding-top:20px;
  .abli {
  @include rect(3.75rem, .38rem);
  background: #3d3d3d;
  color:#fff;
  span {
    @include margin(30px 3.2% 30px 20px);
    @include text-align(content);
    font-size:24px;
  }
  i {
    float:right;
    margin-right:.2rem;
    font-size:18px;
  }
  }
}
}
</style>
