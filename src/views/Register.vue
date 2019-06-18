<template>
  <div class="container">
    <div class="content">
      <van-cell-group>
        <span class="header">注册账号</span>
        <div>
          <van-field placeholder="手机号" v-model="username" :error-message="usernameState" clearable/>
        </div>

        <div class="tet">
          <van-field placeholder="验证码" v-model="sms" clearable/>
          <van-button @click="sendCode" slot="button" size="small" type="primary">发送验证码</van-button>
        </div>

        <van-field placeholder="密码" type="password" v-model="password" clearable :error-message="passwordState"/>
        <van-button type="primary" @click="register" size="large" class="sub">注册</van-button>
        <div>
          <a href="/login">登录></a>
        </div>
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
      username: '',
      password: '',
      sms: '',
      code: '1'
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
    sendCode () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        this.username = '' // 并不是必须 把手机号置空
        Toast('手机号码输入有误')
      } else {
        // 可以向服务器请求该手机号的验证码
        this.getCode()
      }
    },
    getCode () { // 获取短信验证码
      axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.username}`)
        .then(res => {
          console.log(res.data)
          if (res.data === 1) {
            Toast('该手机号已经被注册')
          } else if (res.data === 0) {
            Toast('获取验证码失败')
          } else {
            // console.log(res.data)
            this.code = res.data.code
          }
        })
    },
    register () {
      if (this.sms !== this.code) {
        this.sms = '' // 验证码错误，重新输入验证码
        Toast('验证码输入错误')
        return
      }

      // if (this.usernameicon !== 'checked') {
      //   Toast('请输入正确的手机号码')
      //   return
      // }

      // if (this.passwordicon !== 'checked') {
      //   Toast('请输入正确的密码')
      //   return
      // }
      // ....
      this.registerFn()
    },
    registerFn () {
      axios.post('http://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('注册失败')
        } else if (res.data === 2) {
          Toast('该用户已注册')
        } else {
          Toast('注册成功')
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
    a {
      float:right;
      font-size: .16rem;
    }
  }
}
</style>
