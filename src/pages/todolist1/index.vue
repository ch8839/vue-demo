<template>
  <div class="contain">
    <div class="head">
      <p>姓名：
        <input type="text" v-model="people.name" placeholder="请输入名字">
      </p>
      <p>年龄：
        <input type="number" v-model="people.age" placeholder="请输入年龄">
      </p>
      <div class="button">
        <button @click="handleSubmit">提交</button>
        <button @click="back">返回</button>
      </div>
    </div>
    <div class="table">
      <div class="table-head">
        <div>序号</div>
        <div>姓名</div>
        <div>年龄</div>
        <div>操作</div>
      </div>
      <todo-item
        v-for="(item,index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete"
        @edit="handleEdit"
      ></todo-item>
      <transition name="box">
        <p v-if="list.length==0">暂无数据</p>
      </transition>
    </div>
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="content">
        <el-form-item label="名字：" :label-width="formLabelWidth">
          <el-input v-model="content.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄：" :label-width="formLabelWidth">
          <el-input v-model="content.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit2">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import todoitem from "../../components/todoitem.vue"; //引入局部组件
export default {
  components: {
    "todo-item": todoitem
  },
  data() {
    return {
      people: {},
      list: [],
      dialogFormVisible: false,
      content: {},
      formLabelWidth: "120px",
      temp_id: ""
    };
  }, //这种形式相当于data:function(){...},在vue-cli中data不能用对象data:{...}的形式，而是返回函数的形式
  methods: {
    handleSubmit: function() {
      if (this.people.age > 150) {
        this.$message({
          message: "年龄太大",
          type: "warning"
        });
        return;
      }
      this.list.push(this.people); //这里的this其实是this.$data.list,这是vue底层做的一个处理
      this.people = {};
    },

    handleEdit(index) {
      console.log(this.list);
      this.dialogFormVisible = true;
      // this.content=this.list[index]
      this.content = Object.assign({}, this.list[index]);
      this.temp_id = index;
    },

    back() {
      this.$router.push({ path: "/" });
    },

    handleSubmit2() {
      this.dialogFormVisible = false;
      console.log(this.temp_id);
      this.list[this.temp_id] = this.content;
    },

    handleDelete: function(index) {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.list.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
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
  background: #eef1f6
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
</style>
