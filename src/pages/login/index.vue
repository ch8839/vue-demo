<template>
  <div class="contain">
    <div class="form">
      <p>SHU-Manage-System</p>
      <div class="form-content">
        <input v-model="form.username" placeholder="请输入用户名">
        <input type="password" v-model="form.password" placeholder="请输入密码"  @keyup.enter="login">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
 
<script>
// import {mapState, mapActions} from 'vuex';
import request from "@/api/login";
export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    async login() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        const data = await this.$store.dispatch("Login", this.form);
        if (data.code == 200) {
          loading.close();
          this.$router.push({ path: "/" });
        } else if (data.code == 412) {
          loading.close();
          this.$message.error("密码错误!");
        } else if (data.code == 403) {
          loading.close();
          this.$message.error("用户不存在！!");
        }
      } catch (err) {
        throw err;
      }
    }
  }
};
</script>
 
<style scoped>
.contain {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2d3a4b;
  height: 100%;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
}
.form p {
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ffffff;
}
.form-content {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
}
.form-content input {
  border: 1px solid #bfcbd9;
  border-radius: 4px;
  padding: 3px 10px;
  color: #1f2d3d;
  margin-top: 15px;
  font-size: 16px;
  height: 36px;
}
.form-content input {
  outline: none; /*去除选中状态边框 */
}
.form-content button {
  margin-top: 15px;
  padding: 12px 20px;
  border-radius: 5px;
  background-color: #409eff;
  color: #ffffff;
  border: 1px solid #409eff;
  outline: none;
}
</style>