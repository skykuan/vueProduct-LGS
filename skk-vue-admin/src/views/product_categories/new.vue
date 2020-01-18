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
      <el-form-item label="商品图片">
        <el-input v-model="ruleForm.coverImg"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="ruleForm.descriptions"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { create } from "@/api/product_categories";
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
          { required: true, message: "请输入分类名称", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          create(this.ruleForm).then(res => {
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
