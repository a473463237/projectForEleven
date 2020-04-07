<template>
  <div class="m-istyle">
    <dl :class="styList.class" @mouseover="over">
      <dt>{{styList.title}}</dt>
      <dd
        v-for="(item,index) in styList.list"
        :key="index"
        :class="{active:isActive === item.type}"
        :data-type="item.type"
      >{{item.text}}</dd>
    </dl>
    <ul :class="styList.ibody">
      <li v-for="(item,index) in dataList[isActive]" :key="index" >
        <el-card>
          <img :src="item.image" />
          <div class="cbody">
            <h4 class="title">{{item.title}}</h4>
            <p class="sub-title">{{item.subTitle}}</p>

            
            <div class="price-info">
             
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价￥{{item.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>


            <!-- <div class="price-info" v-if="item.number">
              //这里显示需要做判断，有可能是抢光了也有可能是其他
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.current_price}}</span>
              </span>
              <span class="old-price">{{item.old_price}}</span>
              <span class="sold bottom-right-info">{{item.sold}}</span>
            </div>

            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{item.sold}}</span>
            </div> -->


          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["styList",'dataList'],
  data() {
    return {
      isActive: "all",
      // dataList: {
      //   kind: [
      //     {
      //       image:
      //         "https://p0.meituan.net/bbia/aee3f14e9a33c138f7e7c473e51766a392274.jpg@460w_260h_1e_1c",
      //       title: "幸福时光蛋糕（朝外店）",
      //       sub_title:
      //         "8英寸幸福时光水果生日蛋糕，不止带来美味 还有爱和幸福1个，约8英寸，任选1",
      //       current_price: "87",
      //       old_price: "门市价¥188",
      //       sold: "朝外大街/世贸天阶",
      //       number: 0,
      //       price_type: true
      //     },
      //     {
      //       image:
      //         "https://p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@460w_260h_1e_1c",
      //       title: "哈根达斯（北京apm店）",
      //       sub_title: "花火蛋糕冰淇淋1个，约700克，圆",
      //       current_price: "258",
      //       old_price: "门市价¥298",
      //       sold: "王府井/东单",
      //       number: 10
      //     },
      //     {
      //       image:
      //         "https://p0.meituan.net/bbia/739081f55701375f2532fbf00998b66a499207.jpg@460w_260h_1e_1c",
      //       title: "BON CAKE（国瑞店）",
      //       sub_title: "小公举1个，约6英寸，圆形",
      //       current_price: "188",
      //       old_price: "门市价¥218",
      //       sold: "崇文门",
      //       number: 10
      //     }
      //   ]
      // }
    };
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName;

      if (tagName !== "DD") {
        return;
      }

      //   let clas =  dom.getAttribute("data-type");
      let clas = dom.dataset.type;
      this.isActive = clas;
    }
  }
};
</script>