<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="Avatar" prop="avatar">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="username"></el-table-column>
      <el-table-column label="Phone" prop="phone"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>
      <el-table-column label="Address" prop="address"></el-table-column>
      <el-table-column label="Roler" prop="roler"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      :pager-count="11"
      :currentPage="currentPage"
      @current-change="loadData"
    ></el-pagination>
    <el-dialog
      :title="type=='edit'?'修改用户信息':'为用户分配权限'"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        :model="current"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- <el-form-item label="日期" prop="date">
          <el-date-picker
            v-model="current.date"
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
 
        </el-form-item>-->
        <el-form-item label="名字" prop="username">
          <el-input type="text" v-model="current.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="current.avatar" :src="current.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="current.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input type="text" v-model="current.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model.number="current.address"></el-input>
        </el-form-item>
        <el-form-item label="我的角色" prop="roler" v-if="type=='permission'">
          <el-tag
            v-for="tag in myTag"
            :key="tag"
            style="marginRight: 5px"
            closable
            @close="deleteTag(tag)"
          >{{tag}}</el-tag>
        </el-form-item>
        <el-form-item label="所有角色" v-if="type=='permission'">
          <el-tag v-for="tag in tags" :key="tag" style="marginRight: 5px" :type="tag.type">
            <span @click="selectTag">{{tag}}</span>
          </el-tag>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    const phones = (rule, value, callback) => {
      if (!/^1[34578]\d{9}$/.test(phone)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };
    return {
      search: "",
      type: "",
      tags: ["boss", "developer", "producter", "operator", "designer"],
      myTag: [],
      dialogVisible: false,
      current: {},
      rules: {
        date: [{ trigger: "blur", validator: phones }],
        username: [{ required: true, trigger: "blur" }],
        address: [{ required: true, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.list.list,
      currentPage: state => state.list.current
    })
  },

  mounted() {
    this.getUserList();
  },
  methods: {
    ...mapActions({
      getUserList: "list/getUserList"
    }),
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.type = "edit";
      this.current = row;
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
      this.dialogVisible = true;
      this.type = "permission";
      this.current = row;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message({
            title: "成功",
            message: "修改成功",
            type: "success"
          });
        } else {
          this.$message({
            title: "失败",
            message: "修改失败",
            type: "error"
          });
        }
      });
    },
    loadData(page) {
      console.log("page.....", page);
      this.getUserList([`page=${page}`]);
    },
    selectTag(e) {
      let tag = e.target.innerText;
      this.myTag.push(tag);
      this.myTag = [...new Set(this.myTag)];
    },
    deleteTag(tag) {
      let index = this.myTag.findIndex(item => item == tag);
      this.myTag.splice(index, 1);
    }
  }
};
</script>
<style scope>
.avatar-uploader /deep/ .avatar {
  width: 40px;
}
.user-avatar {
  width: 60px;
}
</style>
