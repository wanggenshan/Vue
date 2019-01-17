<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="avatar" prop="avatar">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column label="userName" prop="username"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>
      <el-table-column label="Address" prop="address"></el-table-column>
      <el-table-column label="Phone" prop="phone"></el-table-column>
      <el-table-column label="Roler" prop>
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.rolers" :key="tag" style="marginRight: 5px">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Access" prop>
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.access" :key="tag" style="marginRight: 5px">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          <el-button size="mini" @click="handleRoler(scope.$index, scope.row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :current-page="currentPage"
      :pager-count="11"
      background
      :total="100"
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
        <el-form-item v-if="type=='edit'" label="姓名" prop="username">
          <el-input type="text" v-model="current.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="头像" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="current.avatar" :src="current.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="手机号" prop="phone">
          <el-input type="text" v-model="current.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="邮箱" prop="email">
          <el-input type="text" v-model="current.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='edit'" label="地址" prop="address">
          <el-input type="text" v-model="current.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type=='permission'" label="我的角色" prop="roler">
          <el-tag
            v-for="tag in myTag"
            :key="tag"
            closable
            style="marginRight: 5px"
            @close="deleteTag(tag)"
            :type="tag.type"
          >{{tag}}</el-tag>
        </el-form-item>
        <el-form-item v-if="type=='permission'" label="所有角色">
          <el-tag v-for="tag in tags" :key="tag" style="marginRight: 5px" :type="tag.type">
            <span @click="selectTag">{{tag}}</span>
          </el-tag>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    const dateValidate = (ruler, value, callback) => {
      console.log("value...", value);
      if (value < "2018-01-01") {
        callback(new Error("当前日期不能小于2018-01-01"));
      } else {
        callback();
      }
    };
    const phoneValidate = (ruler, value, callback) => {
      if (
        !/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      type: "",
      tags: ["boss", "developer", "producter", "operator", "designer"],
      myTag: [],
      search: "",
      current: {},
      rules: {
        phone: [{ trigger: "blur", validator: phoneValidate }],
        username: [{ trigger: "blur", required: "true" }],
        address: [{ trigger: "blur", required: "true" }]
      },
      dialogVisible: false,
      currentPage: 1
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.list.list
    })
  },
  created() {
    this.getUserList();
  },
  methods: {
    ...mapActions({
      getUserList: "list/GetUserList",
      updateUserInfo: "list/UpdateUserInfo",
      deleteUser: "list/DeleteUser",
      modifyRule: "list/ModifyRule"
    }),
    loadData(page) {
      this.currentPage = page;
      console.log("page...", page);
      this.getUserList([`page=${page}`]);
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.type = "edit";
      this.current = { ...row };
      console.log(index, row);
    },
    handleDelete(index, row) {
      let { id } = row;
      this.deleteUser({ uid: id })
        .then(res => {
          this.$message({
            message: res,
            type: "success"
          });
          // 重新请求数据
          this.getUserList([`page=${this.currentPage}`]);
        })
        .catch(err => {
          this.$message({
            message: error,
            type: "error"
          });
        });
    },
    handleRoler(index, row) {
      this.dialogVisible = true;
      this.type = "permission";
      this.current = { ...row };
      this.myTag = [...row.rolers];
      // console.log(index, row);
    },
    handleClose() {
      this.dialogVisible = false;
    },
    submitForm() {
      if (this.type == "edit") {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            let { id, username, address, email, phone } = this.current;
            this.updateUserInfo({ id, username, address, email, phone })
              .then(res => {
                this.$message({
                  message: res,
                  type: "success"
                });
                this.dialogVisible = false;
                // 重新请求数据
                this.getUserList([`page=${this.currentPage}`]);
              })
              .catch(err => {
                this.$message({
                  message: error,
                  type: "error"
                });
                this.dialogVisible = false;
              });
          }
        });
      } else if (this.type == "permission") {
        // 把角色名转为角色id
        let rolersId = this.myTag.map(item => {
          return this.tags.findIndex(value => value == item) + 1;
        });
        this.modifyRule({ uid: this.current.id, rolersId })
          .then(res => {
            this.$message({
              message: res,
              type: "success"
            });
            this.dialogVisible = false;
            // 重新请求数据
            this.getUserList([`page=${this.currentPage}`]);
          })
          .catch(err => {
            this.$message({
              message: error,
              type: "error"
            });
            this.dialogVisible = false;
          });
      }
    },
    selectTag(e) {
      console.log("e...", e);
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

<style lang="scss" scoped>
.avatar-uploader /deep/ .avatar {
  width: 40px;
}
.user-avatar {
  width: 60px;
}
</style>