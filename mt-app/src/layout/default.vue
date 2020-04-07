<template>
    <el-container class="layout-default">
      <el-header height="">
          <Header />
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer height="">
          <Footer />
      </el-footer>
    </el-container>
</template>


<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
    components:{
        Header,
        Footer
    }
};
</script>


<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>