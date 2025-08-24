<script setup>
import { defineAsyncComponent } from 'vue'
// 使用异步导入可能有助于发现路径问题
const MethodContent = defineAsyncComponent(() => import('../mds/method.mdx'))
</script>

<template>
  <div class="method-section">
    <el-divider />
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <MethodContent />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.method-section {
  margin: 20px 0;
}
</style>