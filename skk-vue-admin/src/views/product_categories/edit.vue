<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="图片路径">
        <el-input v-model="ruleForm.coverImg"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="ruleForm.descriptions"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getOne, update } from "@/api/product_categories";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        descriptions: "",
        coverImg: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    getOne(this.$route.query.id).then(res => {
      this.ruleForm.name = res.name;
      this.ruleForm.descriptions = res.descriptions;
      this.ruleForm.coverImg = res.coverImg;
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          update(this.$route.query.id, this.ruleForm).then(() => {
            this.$router.push({
              name: "ProductCategoriesList"
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
