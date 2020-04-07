<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <m-select :title="item.title" :list="item.subList" />
      </dd>
    </dl>

    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList.data" :key="item.type">
        <m-select :title="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/api.js";
import MSelect from "./select.vue";
export default {
  created() {
    api.getClassify().then(res => {
      this.classicList = res.data.data;
    });

// 不获取了 Mmp接口给了个字符串  格式还是错误的，少两括号 透
    // api.getAreaList().then(res => {
    //   let Str = res.data;
    //   console.log(Str);
    //   console.log(JSON.parse(Str));
    // });

    // this.areaList = JSON.parse(this.areaList);
    // console.log(this.areaList);
  },
  data() {
    return {
      classicList: [],
      areaList: {
        status: "success",
        msg: "成功",
        data: [
          {
            title: "推荐商圈",
            subList: [
              {
                name: "望京",
                id: 120000
              },
              {
                name: "昌平",
                id: 12222
              }
            ]
          },
          {
            title: "南岗区",
            subList: [
              {
                name: "中央大街",
                id: 123
              },
              {
                name: "西客站",
                id: 11
              },
              {
                name: "花园街",
                id: 222
              },
              {
                name: "通乡街/果园街",
                id: 21
              },
              {
                name: "爱建社区",
                id: 1
              },
              {
                name: "学府路",
                id: 34
              }
            ]
          }
        ]
      }
    };
  },

  components: {
    MSelect
  }
};
</script>