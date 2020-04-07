<template>
  <el-container class="page-register">
    <el-header class="header">
      <header>
        <router-link to="/" class="site-logo"></router-link>
        <div class="login">
          已有美团账号?
          <router-link tag="a" :to="{name:'login'}">登录</router-link>
        </div>
      </header>
    </el-header>

    <el-main>
      <div class="content">
        <el-form
          :model="registerForm"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="100px"
          class="demo-registerForm"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="registerForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="registerForm.password"
              autocomplete="off"
              @input="inputPass"
            ></el-input>
            <div class="pw-strength">
              <div :class="['bar',strongClass]"></div>
              <div class="letter">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
              </div>
            </div>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="agree" @click="submitForm('registerForm')">同意以下协议并注册</el-button>

            <div class="term">
              <a
                class="f1"
                href="https://rules-center.meituan.com/rules-detail/4"
                target="_blank"
              >《美团点评用户服务协议》</a>
              <a
                class="f1"
                href="https://rules-center.meituan.com/rules-detail/2"
                target="_blank"
              >《美团点评隐私政策》</a>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-main>

    <el-footer>
      <footer>
        <p class="copyright">
          ©
          <a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
          <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
          <span class="f1">京公网安备11010502025545号</span>
        </p>
      </footer>
    </el-footer>
  </el-container>
</template>

<script>
import api from "@/api/api.js";
export default {
  data() {
    let userName = (rule, value, callback) => {
      // 使用规则匹配用户名，如果成功 true
      let matchUserName = this.matchingRule(value, 4, 16, "user");

      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (!matchUserName) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      // 使用规则 匹配密码 如果成功 true
      let matchPassword = this.matchingRule(value, 4, 16, "user");
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!matchPassword) {
        callback(new Error("密码必须为6-16位的字母数字或下划线组成"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        checkPass: ""
      },
      rules: {
        //   失去焦点之后就有判断 的
        userName: [{ validator: userName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      strongClass: ""
    };
  },
  methods: {
    /**
     * 封装规则
     * 所需要判断的数值
     * 最小位数
     * 最大位数
     * 判断的类型 是用户名 user  是密码 pass
     */
    matchingRule(value, min, max, type) {
      // 匹配输入的用户名中是否有数字
      const regNum = /(\d)+/g;
      // 匹配输入的用户名中是否有字母
      const regLetter = /(\w)+/g;
      // 匹配输入的用户名中是否有下划线
      const regUnderline = /_/g;

      // 满足所有规则就是最强
      let strong =
        value.length > min &&
        value.length < max &&
        value.match(regNum) &&
        value.match(regLetter) &&
        value.match(regUnderline);

      // 中等  字母 数字
      let middle =
        value.length > min &&
        value.length < max &&
        value.match(regNum) &&
        value.match(regLetter);

      //  中等2   字母 下划线
      let middle2 =
        value.length > min &&
        value.length < max &&
        value.match(regNum) &&
        value.match(regUnderline);

      // 弱
      let weak =
        value.length > min && value.length < max && value.match(regNum);

      if (type === "user") {
        // 判断用户名
        if (strong) {
          return true;
        } else {
          return false;
        }
      } else if (type === "pass") {
        if (strong) {
          this.strongClass = "strong";
        } else if (middle || middle2) {
          this.strongClass = "normal";
        } else if (weak) {
          this.strongClass = "week";
        } else {
          this.strengthClass = "";
        }

        // 这里判断密码必须为6-16位的字母数字或下划线组成
        if (strong) {
          return true;
        } else if (middle || middle2) {
          return true;
        } else {
          return false;
        }
      } else {
        new Error("匹配规则出错，有可能传值出错");
      }
    },
    inputPass() {
      // 拿到所需判断的用户名
      let userPassword = this.registerForm.password;
      this.matchingRule(userPassword, 6, 16, "pass");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        //   满足所有的匹配规则之后执行 注册
        if (valid) {
          api.getRegister({
            params: {
                userName:this.registerForm.userName,
                password:this.registerForm.password,
                rePassword:this.registerForm.checkPass,
            }
          }).then(res=>{
              console.log(res)
               if (res.data.status == 'success') {
                    this.$router.push({name: 'login'});
                } else {
                    alert(res.data.msg);
                }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>

