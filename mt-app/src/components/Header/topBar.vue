<template>
  <div class="m-header-topbar m-header">
    <el-col :span="10">
        <Geo />
    </el-col>
      <el-col :span="14">
        <Mav />
    </el-col>
  </div>
</template>

<script>
import Mav from "./nav";
import Geo from "./geo";
export default {
  components: {
    Mav,
    Geo
  }
};
</script>




