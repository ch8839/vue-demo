<template>
  <div class="contain">
    <img src="../../assets/logo.png">
    <p>你好~{{username}}</p>
    <div class="content">
    <button @click="topage1">演示1</button>
    <button @click="topage2">演示2</button>
    <button @click="exit">退出</button>
    </div>
  </div>
</template>
 
<script>
import {mapState} from 'vuex';
import request from "@/api/getUserInfo"
export default {
  data() {
    return {
     
    };
  },
  methods: {
      topage1(){
          this.$router.push({path: '/todolist1' , query:{todolistId:1}})
      },
      topage2(){
          this.$router.push({path: '/todolist2' , query:{todolistId:2}})
      },
      exit(){
          this.$store.dispatch('LogOut')
          location.reload() // 为了重新实例化vue-router对象 避免bug
      }
  },
  computed:{
  ...mapState({
    username:state=>state.user.name.username
  })
  },
  mounted(){
    // request.getUserInfo().then(res=>{
    //   console.log(1,res)
    // })
    // request.getStudentInfo("1001").then(res=>{
    //   console.log(2,res)
    // })
    this.$store.dispatch('getInfo')
  }
};
</script>
 
<style scoped>
.contain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center
}
.content button {
  padding: 10px 20px;
  border-radius: 2px;
  background: #409eff;
  color: #fff;
  border: none;
  margin: 20px
}
</style>