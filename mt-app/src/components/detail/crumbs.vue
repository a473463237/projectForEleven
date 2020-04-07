<template>
  <div class="el-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.position}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{tit}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>


<script>
export default {
    props:['tit']
}
</script>