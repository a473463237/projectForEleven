<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="ddMouseLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in dataList" :key="index" @mouseenter="ddMouseEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="curData"
      @mouseenter="detailMouseEnter"
      @mouseleave="detailMouseLeave"
    >
      <template v-for="(item,index) in curData.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v + '_' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>


<script>
import api from '@/api/api.js'
export default {
    created(){
        // 获取首页左侧导航条数据
        api.getMenuList().then(res=>{
            this.dataList = res.data.data;
        })
    },
  data() {
    return {
      curData: "",
      dataList: []
    };
  },
  methods: {
    ddMouseEnter(item) {
      this.curData = item;
    },
    ddMouseLeave() {
      this.timer = setTimeout(() => {
        this.curData = "";
      }, 0);
    },
    detailMouseEnter() {
      clearTimeout(this.timer);
    },
    detailMouseLeave() {
      this.curData = "";
    }
  }
};
</script>