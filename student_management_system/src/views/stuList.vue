<template>
  <div>
    <!-- 搜索 -->
    <search />

    <!-- 学生列表 -->
    <student-list />
    <!-- 分页列表 -->
    <turn-page />

    <!-- 编辑点击的弹框 -->
    <transition>
      <my-dialog v-if="showDialog" />
    </transition>
  </div>
</template>

<script>
import Search from "@/components/stuList/search.vue";
import studentList from "@/components/stuList/studentList.vue";
import myDialog from "@/components/stuList/dialog.vue";
import turnPage from "@/components/stuList/turnPage.vue";
export default {
  components: {
    Search,
    studentList,
    turnPage,
    myDialog,
  },
  computed: {
    showDialog() {
      return this.$store.state.dialog;
    }
  }
};
</script>

<style>
 /* v-enter, v-enter-to */
 /* v-leave, v-leave-to */
 /* v-enter-active, v-leave-active */
 .v-enter {
   top: -100%;
   height: 0;
   opacity: 0;
 }
 .v-enter-to {
   top: 0;
   height: 100%;
   opacity: 1;
 }
 .v-leave {
   top: 0;
   height: 100%;
   opacity: 1;
 }
 .v-leave-to {
   top: -100%;
   height: 0;
   opacity: 0;
 }
 .v-enter-active, .v-leave-active {
   transition: all 1s;
 }
</style>