<template>
  <div class="container">
   <div class="content">
    <van-nav-bar  left-text="|全部音单" right-text="类型"/>
    <ul class="tonelist">
      <router-link v-for="(item,index) of tonelist" :key="index" class="toneli" to="/prolist" tag="li">
        <div class="img">
          <img :src="item.front_cover">
        </div>
        <div class="fo">
          <h4>{{ item.title }}</h4>
        </div>
      </router-link>
    </ul>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'api/explore/tagalbum?order=0'

export default {
  data () {
    return {
      tonelist: ''
    }
  },
  mounted () {
    axios.get(baseUrl).then(res => {
      console.log(res.data.albums)
      let arr = []
      for (let i = 0; i < res.data.albums.length; i++) {
        arr.push(res.data.albums[i])
      }
      console.log(arr)
      this.tonelist = arr
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.tonelist {
  .toneli {
    float: left;
    @include rect(1.63rem, 1.91rem);
    @include margin(10px 3.2% 10px);
  .img {
    @include rect(1.45rem, 1.45rem);
    img {
      @include rect(100%, 100%);
    }
   }
  .fo {
    h4 {
      overflow: hidden;
      @include rect(1.06rem, 0.39rem);
    }
  }
  }
}
</style>
