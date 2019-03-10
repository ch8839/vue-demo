<template>
  <div class="contain">
    <img src="../../assets/logo.png">
    <div class="content">
    <button @click="topage1">演示1</button>
    <button @click="topage2">演示2</button>
    </div>
  </div>
</template>
 
<script type="text/babel">
export default {
  data() {
    return {
      msg: "侧边栏"
    };
  },
  methods: {
      topage1(){
          this.$router.push({path: '/todolist1' , query:{todolistId:1}})
      },
      topage2(){
          this.$router.push({path: '/todolist2' , query:{todolistId:2}})
      }
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