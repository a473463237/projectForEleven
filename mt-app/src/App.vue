<template>

    <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Default from './layout/default.vue'

export default {
  name: 'app',
  components: {
    Default
  }
}
</script>


