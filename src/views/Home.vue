<template>
  <div class="container">
   <div class="content">
    <van-swipe :autoplay="3000" indicator-color="white" class="banner">
      <van-swipe-item v-for ="(item, index) of bannerlist" :key="index">
        <img :src="item.pic" alt="">
      </van-swipe-item>
    </van-swipe>
    <Family></Family>
   </div>
  </div>
</template>

<script>
import Family from '@/components/common/Family'
import axios from 'axios'
const baseUrl = 'api/mobileWeb/newHomepage3'

export default {
  components: {
    Family
  },
  methods: {
    onClickRight () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      bannerlist: ''
    }
  },
  mounted () {
    axios.get(baseUrl).then(res => {
      console.log(res.data.info)
      let arr = []
      for (let i = 0; i < res.data.info.banner.length; i++) {
        arr.push(res.data.info.banner[i])
      }
      console.log(arr)
      this.bannerlist = arr
    }).catch(err => {
      console.log(err)
    })
  }
}

</script>

<style lang="scss">
@import '@/lib/reset.scss';
.banner {
  height: 1.24rem;
  img {
    width: 100%;
    height:100%;
  }
}
</style>
