<template>
  <div class="page-detail">
    <el-row>
      <crumbs class="m-crumbs" :tit="title" />
    </el-row>
    <el-row>
      <card />
    </el-row>
    <el-row>
      <el-col :span="19" class="left">
        <el-row>
          <Preferential />
        </el-row>
        <el-row>
          <comment />
        </el-row>
      </el-col>
      <el-col :span="5" class="right">
        <!-- 地图 -->
        <m-map />
        <!-- 猜你喜欢 -->
        <fav />
      </el-col>
    </el-row>
  </div>
</template>


<script>
import api from "@/api/api.js";
import Crumbs from "@/components/detail/crumbs.vue";
import Card from "@/components/detail/card.vue";
import Preferential from "@/components/detail/preferential.vue";
import MMap from "@/components/detail/map.vue";
import Fav from "@/components/detail/fav.vue";
import Comment from "@/components/detail/comment.vue";

export default {
  created() {
    let id = this.$route.params.id;

    // 正常情况 res.data.data  应该给你个数组，然后你去里面的每个对象里面匹配哪个
    // 和上面的 id匹配 就展示这个内容
    api.getDetail().then(res => {
      if (id === res.data.data.itemId) {
        this.title = res.data.data.title;
      }
    });
  },
  components: {
    Crumbs,
    Card,
    Preferential,
    Comment,
    MMap,
    Fav
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/detail/index.scss";
@import "@/assets/css/detail/comment.scss";
</style>