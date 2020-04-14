<template>
      <div class="left-menu">
        <dl class="menu-list">
          <dt>学生管理</dt>
          <router-link to='/stuList' tag='dd' >学生列表</router-link>
          <router-link to='/addList' tag='dd' >新增学生</router-link>
          <!-- <dd class="active list" data-id="student-list">学生列表</dd> -->
          <!-- <dd data-id="add-student">新增学生</dd> -->
        </dl>
      </div>
</template>

<script>
export default {
    
}
</script>