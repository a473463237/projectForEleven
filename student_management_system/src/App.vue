<template>
  <div id="app"  class="wrapper">
      <system-header />
      <left-menu />
      <div class="right-content">
        <router-view />
      </div>
    </div>

</template>

<script>
import systemHeader from '@/components/systemHeader.vue'
import leftMenu from '@/components/leftMenu.vue'
export default {
  components:{
    systemHeader,
    leftMenu
  }
}
</script>


<style>
@import url(./assets/css/index.css);

</style>
