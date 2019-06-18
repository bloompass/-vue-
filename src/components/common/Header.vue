<template>
<div class="header">
  <header class="header">
    <ul>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-adbddb">猫耳FM</span>
      </router-link>
      <router-link to="/search" tag="li">
        <span class="iconfont icon-fangdajing"></span>
      </router-link>
      <router-link to="/user" tag="li">
        <span class="iconfont icon-sangangy"></span>
      </router-link>
    </ul>
  </header>
  <ul>
    <router-link to="/tonelist" tag="li">
      <p>音单</p>
    </router-link>
    <router-link to="/home" tag="li">
      <p>推荐</p>
    </router-link>
    <router-link to="/kind" tag="li">
      <p>分类</p>
    </router-link>
    <router-link to="/user" tag="li">
      <p>我的</p>
    </router-link>
  </ul>
</div>
</template>
