<template>
  <div class="contain">
    <div class="head">
      <p>
        学号：
        <input type="number" v-model="number" placeholder="请输入学号">
      </p>
      <div class="button">
        <button @click="handleSubmit">提交</button>
        <button @click="back">返回</button>
      </div>
    </div>
    <div class="table">
      <div class="table-head">
        <div>学号</div>
        <div>姓名</div>
        <div>性别</div>
      </div>

      <div class="table-body" v-if="!notexist">
        <div class="single-body">
          <div>{{people.number}}</div>
          <div>{{people.username}}</div>
          <div>{{people.sex}}</div>
        </div>
      </div>

      <transition name="box">
        <p v-if="notexist">查无此人</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: {},
      number:'',
      notexist:false
    };
  }, //这种形式相当于data:function(){...},在vue-cli中data不能用对象data:{...}的形式，而是返回函数的形式
  methods: {
    handleSubmit: function() {
      this.$http.get("/student/"+this.number).then(res => {
      console.log(res)
      
      if(res.data.success){
        this.people = res.data.res
        this.notexist=false
      }else{
        this.notexist=true
      }
      this.number=''
    }).catch(err=>{
      throw err
    });
      
    },

    back() {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scope>
.contain {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.head {
  position: relative;
}
.button {
  position: absolute;
  right: 0;
}
.button button {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  border: none;
  margin-top: 10px;
  /* display: block */
}

.table {
  width: 50%;
  margin-left: 100px;
}
.table-head {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.table-head div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #dfe6ec;
  font-weight: 500;
  flex: 1;
  background: #eef1f6;
}
.table-head div:nth-child(2) {
  width: 50px;
  flex: 2;
}
.table p {
  text-align: center;
  color: rgb(72, 43, 199);
}
.box-enter-active,
.box-leave-active {
  transition: all 0.8s;
}

.box-enter {
  opacity: 0;
  margin-left: 100%;
}

.box-leave-active {
  opacity: 0;
  margin-left: 100%;
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

.edit {
  color: #fff;
  background-color: rgb(104, 103, 103);
  border-color: rgb(104, 103, 103);
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  border: none;
  margin-right: 2px;
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
.single-body:hover {
  background: #eef1f6;
}
.single-body div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: 500;
  flex: 1;
  border: 1px solid #dfe6ec;
  overflow: hidden;
}
.single-body div:nth-child(2) {
  width: 50px;
  flex: 2;
}
</style>
