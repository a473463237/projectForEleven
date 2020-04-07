<template>
  <div class="m-products-fav">
    <h4>猜你喜欢</h4>

    <ul class="fav-list">
      <li v-for="(item,index) in favList" :key="index">
        <router-link :to="{name: 'Detail', params: {id: itemId}}">
          <img :src="item.image" alt />
          <h4>{{item.title}}</h4>
          <p class="store">
            <el-rate v-model="item.store" disabled text-color="#ff9900" score-template="{value}"></el-rate>

            <span>{{item.evaluateNum}}个评价</span>
          </p>
          <p>
            <span>{{item.address}}</span>
          </p>
          <p class="price">
            ￥
            <em>{{item.price}}</em>起
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/api.js";
export default {

  // 我这里退而求次了，给的接口列表的ID  和内容ID不匹配，就是太少了所以这里直接用了详情页面的id
  created() {
    api.getDetail().then(res => {
      this.itemId = res.data.data.itemId;
    });
  },
  data() {
    return {
      itemId: "",
      favList: [
        {
          image:
            "https://p0.meituan.net/bbia/03be32479dd832b5d9bd525ccd3ef91b880889.jpg@237w_132h_1e_1c",
          title: "探炉烤鱼（茂业百货华强北店）",
          store: 4.5,
          evaluateNum: "3769",
          address: "华强北",
          price: "95.0"
        },
        {
          image:
            "https://p0.meituan.net/bbia/03be32479dd832b5d9bd525ccd3ef91b880889.jpg@237w_132h_1e_1c",
          title: "探炉烤鱼（茂业百货华强北店）",
          store: 4.6,
          evaluateNum: "3769",
          address: "华强北",
          price: "95.0"
        }
      ]
    };
  }
};
</script>