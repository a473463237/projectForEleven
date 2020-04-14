<template>
  <div class="search">
    <label for="search-input">请输入关键字</label>&nbsp;
    <input type="text" id="search-input" v-model="keyword" />&nbsp;
    <button id="search-submit" @click="search">搜索</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchValue", this.keyword).then(res => {
        this.$toast(res);
      });

    }
  }
};
</script>