<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input v-model="ruleForm.coverImg"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="ruleForm.productCategory">
          <el-option v-for="c in categories" :key="c._id" :value="c._id">{{ c.name }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { create } from "@/api/products";
import { getList } from "@/api/product_categories";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        price: 0,
        coverImg: "",
        productCategory: ""
      },
      categories: [],
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    getList(1, 100).then(res => {
      this.categories = res.categories;
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          create(this.ruleForm).then(res => {
            this.$router.push({
              name: "ProductsList"
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
