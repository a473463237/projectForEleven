<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in Letter" :key="item">
          <a :href="'#city_' + item">{{item}}</a>
      </dd>
    </dl>

    <!-- 下面内容部分 -->
    <dl class="m-categroy-section" v-for="(value,key) in cityGroup" :key='key' :id="'city_' + key">
      <dt>{{key}}</dt>
      <dd>
        <span v-for="(v,i) in value" :key='v+"_"+i'>{{v.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
created(){

    api.getProvinceList().then(res => {
      let obj = {};
      let arr = res.data.data;

      for (const value of arr) {
        for (const v of value.cityInfoList) {
            if(!obj[v.firstChar.toUpperCase()]){
              obj[v.firstChar.toUpperCase()]=[];
            }
            obj[v.firstChar.toUpperCase()].push(v);
        }
      }

      const newData = {};

      Object.keys(obj).sort().map(key => {
        newData[key]=obj[key]
      })

       this.cityGroup = newData;

    });

},
  data() {
    return {
      Letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      cityGroup:{},
      dataList: {
        status: "success",
        msg: "成功",
        data: [
          {
            id: 1,
            name: "北京",
            pinyin: "beijing",
            acronym: "bj",
            rank: "S",
            firstChar: "b"
          }
        ]
      }
    };
  },
};
</script>

