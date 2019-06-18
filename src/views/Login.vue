登录<template>
  <div class="container">
   <div class="content">
     <van-cell-group>
        <span class="header">登录账号</span>
        <div>
          <van-field placeholder="手机号" v-model="username" :error-message="usernameState" clearable/>
        </div>

        <van-field placeholder="密码" type="password" v-model="password" clearable :error-message="passwordState"/>
        <van-button type="primary" @click="login" size="large" class="sub">登录</van-button>
        <a href="/register" class="sub2">注册</a>
      </van-cell-group>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
import axios from 'axios'
Vue.use(Toast)

export default {
  data () {
    return {
      username: '18838412578',
      password: '368368'
    }
  },
  computed: {
    usernameState () { // 显示用户名手机号的格式的错误信息
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    passwordState () { // 显示密码的格式的错误信息
      if (this.password === '') {
        return ''
      } else if (!(/^(\w){6,20}$/.test(this.password))) {
        return '密码格式错误：只能输入6-20个字母、数字、下划线'
      } else {
        return ''
      }
    }
  },
  methods: {
    login () {
      if (this.sms !== this.code) {
        this.sms = '' // 验证码错误，重新输入验证码
        Toast('验证码输入错误')
        return
      }
      this.loginFn()
    },
    loginFn () {
      axios.post('http://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res.data)
        if (res.data === 0) {
          Toast('登陆失败')
        } else if (res.data === 2) {
          Toast('没有该用户')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else {
          Toast('登陆成功')
          this.$store.commit('changeLoginState', 'ok')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.content {
  .van-cell-group {
  @include rect(3.03rem, 4.5rem);
    margin:.4rem auto;
    .header {
      font-size:.16rem;
      margin:.12rem 0;
    }
    .tet {
      @include flexbox();
      .van-field {
        @include flex();
      }
      .van-button {
        @include flex();
        width: 1.05rem;
        height: .42rem;
        font-size: .14rem;
        background-color: #424242;
        border: 0;
        line-height: .42rem;
        margin-top:.22rem;
        color:#fff;
      }
    }
    .van-field {
      margin:.24rem .13rem;
      padding:.05rem .1rem;
      border:1px solid #000;
    }
    .sub {
      line-height: .26rem;
      font-size: .16rem;
      color: #fff;
      background-color: #c14a3f;
      border: 0;
    }
    .sub2 {
      line-height: .26rem;
      font-size: .16rem;
      color: #c14a3f;
      background-color: #fff;
      border-color: #c14a3f;
    }
  }
}
</style>
