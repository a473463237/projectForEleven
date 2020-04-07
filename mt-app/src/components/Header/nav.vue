<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link :to="{name: 'my'}">我的美团</router-link>
        <dl>
          <dd>
            <router-link :to="{path:'/'}">我的订单</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">我的收藏</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">抵用券</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link :to="{path:'/'}">手机app</router-link>
      </li>
      <li class="list bd">
        <router-link :to="{path:'/'}">商家中心</router-link>
        <dl>
          <dd>
            <router-link :to="{path:'/'}">商家中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">美团餐饮商户中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">我想合作</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{path:'/'}">美团规则</router-link>
        <dl>
          <dd>
            <router-link :to="{path:'/'}">规则中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">规则目录</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{path:'/'}">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{path:'/'}">酒店旅游</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">国际机票</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">火车票</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">民宿</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">主题酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">商务酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">豪华酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">客栈</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">青年旅社</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">度假酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">别墅</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">农家院</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{path:'/'}">烤鱼</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">特色小吃</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">烧烤</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">自助餐</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">火锅</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">代金券</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>

            <dd>
              <router-link :to="{path:'/'}">热映电影</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">热门影院</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">北美票房榜</router-link>
            </dd>
            <dd>
              <router-link :to="{path:'/'}">电影排行榜</router-link>
            </dd>
          </dl>

          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://minsu.meituan.com/app/" target="_blank">
                <img
                  class="appicon"
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="民宿app"
                  alt="民宿app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
                />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>