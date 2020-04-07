<template>
  <div>
    <span>按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />

    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="CityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />

    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from "@/api/api.js";
export default {
  created() {
    // 获取省份
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name =  item.provinceName;
        return item;
      });

    });
  },
  data() {
    return {
      provinceList: [],
      cityList: [],
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      province: "省份",
      city: "城市",
      provinceActive: false,
      CityActive: false,
      cityDisabled: true,
      searchWord: "",
      loading: false
    };
  },
  mounted() {
    this.list = this.searchList.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.CityActive = false;
      }
    },

    changeCityActive(flag) {
      this.CityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },

    changeProvince(v) {
      this.province = v.name;
      this.cityDisabled = false;
      this.cityList = v.cityInfoList;

      setTimeout(() => {
        this.provinceActive = false;
      }, 100);
    },

    changeCity(v) {
      this.city = v.name;

      setTimeout(() => {
        this.CityActive = false;
        this.$store.dispatch('setPosition',v.name);
        this.$router.push({name: 'Index'})
      }, 100);
    },
    remoteMethod(val) {
      // 请求后端接口
      console.log(document.cookie, localStorage);
    }
  },
  components: {
    MSelect
  }
};
</script>


