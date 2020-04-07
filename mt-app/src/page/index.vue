<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <container :styList="isStyleList" :dataList="ResultsByKeywords" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <container :styList="youhui" :dataList="ResultsByKeywords" />
      </el-col>
    </el-row>
  </div>
</template>


<script>
import MMenu from "@/components/Index/menu.vue";
import MLife from "@/components/Index/life.vue";
import Container from "@/components/Index/container.vue";
import api from "@/api/api.js";

export default {
  components: {
    MMenu,
    MLife,
    Container
  },
  created() {
    //  获取有格调区域的内容
    api.getResultsByKeywords().then(res => {
      this.ResultsByKeywords = res.data.data;
      // console.log(res.data.data);
    });
  },
  data() {
    return {
      ResultsByKeywords: {},
      isStyleList: {
        title: "有格调",
        class: "istyle",
        ibody: "ibody",
        list: [
          {
            text: "全部",
            type: "all"
          },
          {
            text: "约会聚餐",
            type: "food"
          },
          {
            text: "丽人spa",
            type: "spa"
          },
          {
            text: "电影",
            type: "movie"
          },
          {
            text: "旅行",
            type: "travel"
          }
        ]
      },
      youhui: {
        title: "狠优惠",
        class: "youhui",
        ibody: "ibody ibodyhui",
        list: [
          {
            text: "全部",
            type: "all"
          },
          {
            text: "约会聚餐",
            type: "food"
          },
          {
            text: "丽人spa",
            type: "spa"
          },
          {
            text: "电影",
            type: "movie"
          },
          {
            text: "旅行",
            type: "travel"
          }
        ]
      }
    };
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
@import "@/assets/css/index/artistic.scss";
</style>