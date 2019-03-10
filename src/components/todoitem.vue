<template>
  <div class="contain">
    <div class="table-body">
      <div class="single-body">
        <div>{{index}}</div>
        <div>{{content.name}}</div>
        <div>{{content.age}}</div>
        <div>
          <button @click="handleClick2" class="edit">编辑</button>
          <button @click="handleClick" class="delete">删除</button>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  props: ["content", "index"],
  data() {
    return {};
 
  },
  methods: {
    handleClick: function() {
      console.log(1, this.index);
      this.$emit("delete", this.index); //向外触发事件delete,事件对应的值index,然后在父组件的子组件模板下监听到delete事件
      //于是触发handleDelete      v-on:delete="handleDelete"
    },
    handleClick2(){
        this.$emit("edit", this.index); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  display: flex;
  flex-direction: row;
}

.delete {
  color: #fff;
  background-color: #d44047;
  border-color: #d44047;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  border: none;
}

.edit{
  color: #fff;
  background-color: rgb(104, 103, 103);
  border-color: rgb(104, 103, 103);
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  border: none;
  margin-right: 2px
}

.table-body {
  display: flex;
  flex-direction: column;

  width: 100%;
}
.single-body {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 92px;
}
.single-body:hover{
    background: #eef1f6
}
.single-body div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: 500;
  flex: 1;
  border:1px solid #dfe6ec;
  overflow: hidden;
}
.single-body div:nth-child(2) {
  width: 50px;
  flex: 2;
}
</style>
