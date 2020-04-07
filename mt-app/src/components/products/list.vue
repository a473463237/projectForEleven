<template>
  <div class="m-products-list">
    <dl>
      <dd v-for="item in nav" :key="item.key"  :class="{'s-nav-active': item.active}">{{item.name}}</dd>
    </dl>
    <el-row>
      <item v-for="(item,index) in productList" :key='index' :meta="item" />
    </el-row>
  </div>
</template>


<script>
import api from '@/api/api.js';
import Item from "./item.vue";
export default {
  created(){
    api.getGoodsList().then(res=>{
      this.productList = res.data.data;
    })
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList:[]
    };
  },
  components: {
    Item
  }
};
</script>