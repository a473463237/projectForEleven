<template>
  <div class="m-sum-card">
    <dl>
      <dt>
        <h1>闺蜜个性个人古装写真摄影</h1>
      </dt>
      <dt>
        <p>
          <el-rate
            v-model="score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <span>人均￥547</span>
        </p>
        <span>
          <i class="icon icon-wechat"></i>
          分享到微信
        </span>
      </dt>
      <dd>
        <div class="seller-info-body">
          <div class="item">
            <span>地址：</span>
            <a href="javascript:void(0);">
              <span>海淀区知春路太月园12号楼A1层0108</span>
            </a>
            <i class="el-icon-location-information"></i>
          </div>
          <div class="item">
            <span>电话：</span>
            <span>010-56207931/13051180061</span>
          </div>
          <div class="item">
            <span>营业时间：</span>
            <span>
              周一至周日
              08:30-23:30
            </span>
          </div>
        </div>
      </dd>
      <dd>
        <div class="support clearfix" >
          <div class="service" >
            <i class="icon icon-wifi"></i>
            <br />
            <span>提供WiFi</span>
          </div>
          <div class="service" >
            <i class="icon icon-park"></i>
            <br />
            <span>停车位</span>
          </div>
        </div>
      </dd>
    </dl>
    <div class="banner">
      <el-image style="width: 384px; height: 212px" :src="url" :preview-src-list="srcList"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 4.5,
      url:
        "https://p0.meituan.net/dpmerchantpic/4ec7c32e8b9b49e48fcbe922324c7fea146277.jpg@660w_500h_1e_1c",
      srcList: [
        "https://p0.meituan.net/dpmerchantpic/4ec7c32e8b9b49e48fcbe922324c7fea146277.jpg@660w_500h_1e_1c",
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  }
};
</script>