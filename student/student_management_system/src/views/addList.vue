<template>
      <!-- 弹窗 -->
        <div class="add-student content" id="add-student">
          <form id="add-student-form">
            <div>
              <label for="name">姓名</label>
              <input type="text" name="name" id="name"  v-model="user.name"/>
            </div>
            <div>
              <label for>性别</label>
              <input type="radio" id="male" name="sex" value="0" v-model="user.sex"  />
              <label for="male" class="radio-label">男</label>
              <input type="radio" id="female" name="sex" value="1" v-model="user.sex"/>
              <label for="female" class="radio-label">女</label>
            </div>
            <div>
              <label for="sNo">学号</label>
              <input type="text" name="sNo" id="sNo"  v-model="user.sNo"/>
            </div>
            <div>
              <label for="email">邮箱</label>
              <input type="text" name="email" id="email"  v-model="user.email"/>
            </div>
            <div>
              <label for="birth">出生年</label>
              <input type="text" name="birth" id="birth" v-model="user.birth"/>
            </div>
            <div>
              <label for="phone">手机号</label>
              <input type="text" name="phone" id="phone" v-model="user.phone"/>
            </div>
            <div>
              <label for="address">住址</label>
              <input type="text" name="address" id="address" v-model="user.address"/>
            </div>
            <div class="button">
              <label for>&nbsp;</label>
              <input type="button" value="提交"  class="btn" id="add-student-btn" @click="commit" />
              <input type="reset" value="重置" class="btn"  @click="reset"/>
            </div>
          </form>
        </div>
</template>


<script>
import api from '@/api/api.js'
export default {
  data() {
    return {
      user: {
        name: "",
        sex: 0,
        phone: "",
        address: "",
        birth: "",
        email: "",
        sNo: ""
      }
    };
  },
  methods: {
    commit() {
      api.addStudent({params:{...this.user}}).then(data => {
        this.$router.push('/stuList');
      })
    },
    reset() {
      this.user = {
        name: "",
        sex: 0,
        phone: "",
        address: "",
        birth: "",
        email: "",
        sNo: ""
      };
    }
  }
};
</script>