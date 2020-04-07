<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      {{$store.state.position}}
      <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
      <a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}} </a>
    </div>
    <div class="m-user">
      <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";

export default {
  created() {
    api.getCurPosition().then(res => {
      // this.$store.dispatch("setPosition", res.data.data.name);
      this.nearCity = res.data.data.nearCity;
    });
  },
  data() {
    return {
      nearCity: []
    };
  },
  watch: {
    "$store.state.position"(){
      // 动态监听  城市位置的变化，从而重新获取到城市的区域列表
      this.nearCity = this.$store.state.position.nearCity;
    }
  }
};
</script>