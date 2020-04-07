<template>
  <el-row class="m-header-searchbar">
    <el-col :span="3" class="left">
      <router-link :to="{path:'/'}">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
      </router-link>
    </el-col>
    <el-col :span="15" class="center">
      <div class="wrapper">
        <input
          type="text"
          class="el-input"
          v-model="inputValue"
          @focus="focus"
          @blur="blur"
          @input="inputFunc"
        />
        <el-button type="primary" icon="el-icon-search"></el-button>

        <!-- 搜索框中没有数据时候展示的 -->
        <dl class="hotPlace" v-show="isHotPlace">
          <dd v-for="(item,index) in hotPlaceList" :key="index">
            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
          </dd>
        </dl>

        <!-- 搜索框中有数据时候展示的 -->
        <dl class="searchList" v-if="isSearchList">
          <dd v-for="(item,index) in searchList" :key="index">
            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
          </dd>
        </dl>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import api from "@/api/api.js";
export default {
  created() {
    // 获取hotPlaceList  列表里面的数据
    api.getSearchHotWords().then(res => {
      this.hotPlaceList = res.data.data;
    });
  },
  data() {
    return {
      inputValue: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: []
    };
  },
  computed: {
    isHotPlace() {
      return !this.inputValue && this.isFocus;
    },
    isSearchList() {
      return this.inputValue && this.isFocus;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 100);
    },
    inputFunc() {
      // 获取searchList  列表里面的数据
      api.getSearchList().then(res => {
        let list = res.data.data.list.filter(item => {
          return item.includes(this.inputValue);
        });
        this.searchList = list;
      });
    }
  }
};
</script>
