<template>
  <div class="content">
  <mt-search v-model="value"></mt-search>
  <p>热门搜索</p>
  <div class="boc">
      <span>魔道祖师</span>
      <span>撒野</span>
      <span>伪装学渣</span>
      <span>默读</span>
      <span>破云</span>
      <span>影帝</span>
      <span>二哈和他的白猫师尊</span>
      <span>全职高手</span>
  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.content {
  .mint-search {
    @include rect(100%, 0.5rem);
    }
    .mint-searchbar {
    background:#000;
    .mint-searchbar-cance {
        color:#fff;
    }
  }
  p {
      font:.14rem/.4rem "";
      margin-left:.2rem;
      border-bottom:1px solid #ccc;
  }
  .boc {
      padding:.1rem;
      span {
          border:1px solid #9e9e9e;
          color:#9e9e9e;
          @include margin(5px 2.5% 6px);
          @include padding(4px 3.2% 10px);
          border-radius: 20px;
          font-size: 12px;
          display: inline-block;
          background: #fff;
      }
  }
}
</style>
