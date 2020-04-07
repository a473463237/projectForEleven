<template>
  <div class="comment">
    <div class="total">
      <div class="sort">
        <span class="on">质量排序</span>
        <span class>时间排序</span>
      </div>
      <!-- react-text: 213 -->
      2204条网友点评
      <!-- /react-text -->
    </div>
    <div class="com-cont">
      <ul class="tags clear">
        <li class>
          <!-- react-text: 382 -->
          肉类好
          <!-- /react-text -->
          <!-- react-text: 383 -->
          (174)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 385 -->
          回头客
          <!-- /react-text -->
          <!-- react-text: 386 -->
          (100)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 388 -->
          海鲜棒
          <!-- /react-text -->
          <!-- react-text: 389 -->
          (61)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 391 -->
          上菜快
          <!-- /react-text -->
          <!-- react-text: 392 -->
          (60)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 394 -->
          饮品赞
          <!-- /react-text -->
          <!-- react-text: 395 -->
          (11)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 397 -->
          交通便利
          <!-- /react-text -->
          <!-- react-text: 398 -->
          (8)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 400 -->
          朋友聚餐
          <!-- /react-text -->
          <!-- react-text: 401 -->
          (9)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 403 -->
          到店自提
          <!-- /react-text -->
          <!-- react-text: 404 -->
          (3)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 406 -->
          性价比低
          <!-- /react-text -->
          <!-- react-text: 407 -->
          (154)
          <!-- /react-text -->
        </li>
        <li class>
          <!-- react-text: 409 -->
          分量少
          <!-- /react-text -->
          <!-- react-text: 410 -->
          (16)
          <!-- /react-text -->
        </li>
      </ul>
      <div class="sea">
        <span>
          <b class></b>
          <!-- react-text: 218 -->
          只看有图片的评论
          <!-- /react-text -->
        </span>
      </div>
      <div>
        <div class="list clear">
          <div class="header">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="https://img.meituan.net/avatar/39e7b692c7939038dacb83fbb033b494334755.jpg@60w_60h_1e_1c"
              />
            </div>
          </div>
          <div class="info">
            <div class="name">A863413</div>
            <div class="date">
              <span>2020年1月12日</span>
            </div>
            <div class="source">
              <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
            </div>
            <div class="desc">味道不错挺好吃的 吃的好饱啊</div>
            <div class="noShowBigImg">
              <div>
                <div class="imageViewer-content com-image-viewer iconfont">
                  <div class="imgs-content">
                    <div class="header">
                      <span class="iconfont icon-close_icon close"></span>
                    </div>
                    <div class="content-arrow-imgs">
                      <div class="figure" style="max-height: 426px;">
                        <div class="image-box">
                          <img
                            class="image"
                            src="https://p0.meituan.net/shaitu/fce8975281144aa3f0915d3172046eda2714322.jpg"
                            style="cursor: auto;"
                          />
                        </div>
                        <div class="footer">
                          <div class="footerCount">
                            <!-- react-text: 456 -->
                            1
                            <!-- /react-text -->
                            <!-- react-text: 457 -->
                            /
                            <!-- /react-text -->
                            <!-- react-text: 458 -->
                            1
                            <!-- /react-text -->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="paginatedThumbnails">
                      <div class="thumbnails">
                        <div class="thumbnail active">
                          <img
                            src="https://p0.meituan.net/shaitu/fce8975281144aa3f0915d3172046eda2714322.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="like-cont">
              <div class="like">
                <b></b>
                <span>赞</span>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:4.6
        }
    }
}
</script>