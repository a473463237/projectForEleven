<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar class="search-panel" />
    </el-row>
  </div>
</template>

<script>
import SearchBar from "./searchBar";
import TopBar from "./topBar";
export default {
  components: {
    SearchBar,
    TopBar
  }
};
</script>


<style lang="scss" >
    @import "@/assets/css/public/header/index.scss";
</style>