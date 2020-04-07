<template>
  <div class="page-changeCity">
    <el-row>
      <provice />
    </el-row>
    <el-row>
      <hot title="热门城市:" :hot="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问:" :hot="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import api from '@/api/api.js'
import Provice from "@/components/changeCity/province.vue";
import Hot from "@/components/changeCity/hot.vue";
import Category from "@/components/changeCity/category.vue";

export default {
  created(){
    api.getHotCity().then(res=>{
       this.hotList=res.data.data;
    })

    api.getRecents().then(res=>{
      this.rencentList = res.data.data;
    })
  },
  data() {
    return {
      hotList: [],
      rencentList: []
    };
  },
  components: {
    Provice,
    Hot,
    Category
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
@import "@/assets/css/changecity/hot.scss";
@import "@/assets/css/changecity/iselect.scss";
@import "@/assets/css/changecity/select.scss";
</style>