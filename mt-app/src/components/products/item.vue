<template>
  <div>
    <dl class="s-item">
      <dt>
        <img :src="meta.image" alt />
      </dt>
      <dd>
        <h3>
          <router-link :to="{path:'/'}">{{meta.title}}</router-link>
        </h3>
        <!-- 评分 -->
        <p>
          <el-rate
            v-model="meta.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>

          <span v-if="meta.score > 4.5">很好</span>
          <span v-else-if="meta.score > 4">好</span>
          <span v-else-if="meta.score > 3.5">不错</span>
          <span v-else>一般</span>

          <span class="s-item-comment-total">{{meta.commentNum}}人评论</span>
          <span></span>
        </p>
        <p>
          <span
            class="s-item-tab"
            v-for="(v,i) in meta.tab"
            :key="i"
          >{{v + (i < meta.tab.length - 1 ? '|' : '')}}</span>
          <span>{{meta.address}}</span>
          <span>
              <a href="#"><i class="el-icon-location"></i>查看地图</a>
          </span>
        </p>
        <p><span class="s-item-tab">人均￥{{meta.avgPrice}}</span></p>

        <ul class="deal-items">
            <li class="items" v-for="(item,index) in meta.dealItems" :key="index">
                <h4 class="deal-title">
                    {{item.title}}
                </h4>
                <p>
                    <span class="deal-price">￥{{item.price}}</span>
                    <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                    <span class="deal-sales">已售{{item.saleNum}}</span>
                </p>
            </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["meta"]
};
</script>