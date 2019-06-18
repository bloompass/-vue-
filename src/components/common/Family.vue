<template>
  <div class="content">
    <div class="title">
      <ul class="tiul">
        <router-link to="/video" tag="li" v-for="(item,index) of prolist" :key="index">
          {{ item.title }}
          <ul class="prolist">
            <router-link to="/prolist" tag="li" v-for="(items,index) of item.objects_point" :key="index" class="proli">
              <div class="img">
                <img :src=" 'http://static.missevan.com/coversmini/' + items.cover_image">
              </div>
              <div class="info">
                <h4>{{ items.soundstr }}</h4>
              </div>
            </router-link>
          </ul>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'api/sound/newhomepagedata'

export default {
  methods: {
    onClickRight () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      prolist: ''
    }
  },
  mounted () {
    axios.get(baseUrl).then(res => {
      console.log(res.data.music)
      let arr = []
      for (let i = 0; i < res.data.music.length; i++) {
        arr.push(res.data.music[i])
      }
      console.log(arr)
      this.prolist = arr
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.content {
  .title {
      @include flex();
      @include rect(100%, 0.44rem);
    .tiul {
    li{
      &:nth-child(1) {
        float:left;
      }
      .prolist {
        width: 3.75rem;
        .proli {
          float: left;
          @include rect(1.06rem, 1.63rem);
          @include margin(10px 2.5% 10px);
        .img {
          @include rect(1.06rem, 1.06rem);
          img {
            @include rect(100%, 100%);
          }
        }
        .info {
          h4 {
            overflow: hidden;
            @include rect(1.06rem, 0.39rem);
          }
        }
        }
      }
    }
    }
  }
}
</style>
