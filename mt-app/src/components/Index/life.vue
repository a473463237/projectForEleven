<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <a href="https://waimai.meituan.com/" class="takeout">美团外卖</a>
        </li>
        <li>
          <a href="https://waimai.meituan.com/">猫眼电影</a>
        </li>
        <li>
          <a href="https://waimai.meituan.com/">美团酒店</a>
        </li>
        <li>
          <a href="https://waimai.meituan.com/" class="takeout">民宿／公寓</a>
        </li>
        <li>
          <a href="https://waimai.meituan.com/" class="apartment">商家入驻</a>
        </li>
        <li>
          <a href="https://waimai.meituan.com/" class="business">美团公益</a>
        </li>
      </ul>
    </el-row>

    <el-row>
      <el-col :span="14">
        <div class="slide">
          <!-- 轮播 -->
          <el-carousel>
            <el-carousel-item v-for="item in imgList" :key="item.name">
              <img :src="item.url" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">

        <div class="m-life-login" v-if='!$store.state.userName'>
          <!-- 登陆 -->
         <h4> <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt /></h4>
          <p class="m-life-login-name">小智同学2!</p>
          <router-link :to="{name: 'register'}"><el-button>注册</el-button></router-link>
          <router-link :to="{name:'login'}"> <el-button>点击登录</el-button></router-link>
        </div>
      <div class="m-life-login" v-else>
          <!-- 登陆 -->
         <h4> <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt /></h4>
          <p class="m-life-login-name">{{$store.state.userName}}</p>
          <el-button>登陆成功</el-button>
        </div>

      </el-col>
    </el-row>

    <el-row>
        <el-col :span='7'>
            <div class="m-life-hotel">
                <div class="m-life-music"></div>
            </div>
        </el-col>
        <el-col :span='7'>
            <div class="m-life-music"></div>
        </el-col>
        <el-col :span='4'>
            <div class="m-life-coop"></div>
        </el-col>
        <el-col :span='6'>
            <div class="m-life-downapp">
                <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                <p>美团APP手机版</p>
                <p class="last-p">
                    <span>1元起</span>
                    <em>吃喝玩乐</em>
                </p>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          name: "001",
          url:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"
        },
        {
          name: "002",
          url:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        },
        {
          name: "003",
          url:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          name: "004",
          url:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          name: "005",
          url:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        }
      ]
    };
  }
};
</script>