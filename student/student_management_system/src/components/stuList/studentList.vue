<template>
  <div class="student-list content content-active" id="student-list">
    <table>
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>年龄</th>
          <th>手机号</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="thbody">
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.sNo}}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex == 0 ? '男' : '女' }}</td>
          <td>{{ item.email }}</td>
          <td>{{ countAge(item.birth) }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
          <td>
            <button class="btn edit" @click="editHandle(item)">编辑</button> &nbsp;
            <button class="btn del" @click='deleteStu(item.sNo)'>删除</button>
          </td>
          <!-- <p>{{item}}</p> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  created() {
    // this.getList({
    //   params: {
    //     page: 1,
    //     size: 10
    //   }
    // });
    this.getList();
  },
  methods: {
    ...mapActions(["getList",'delStu']),
    ...mapMutations(["setEditStu",'setDialog']),
    countAge(birth) {
      return new Date().getFullYear() - birth;
    },
    editHandle(item) {
      this.setDialog(true);
      this.setEditStu(item);
    },
    deleteStu(sNo){
      this.delStu({params:{sNo:sNo}}).then(data => {
         this.$toast(data)
       })
    }
  },
  computed: {
    ...mapState({
      list: state => state.list
    })
  }
};
</script>