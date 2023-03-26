<script setup lang="ts">
import { Search, User } from '@element-plus/icons-vue'

const search = ref()

definePageMeta({
  layout: 'sub',
  scrollToTop: true,
})

onMounted(() => search.value.focus())

const query = ref()

</script>

<template>
  <div>
    <h1>참여인원 조회</h1>
    <el-row style="margin: 10px 0;">
      <el-input ref="search" v-model="query" class="w-50 m-2" size="large" placeholder="단체 또는 이름을 입력해 주세요" :prefix-icon="Search"
        clearable />
    </el-row>

    <el-divider />

    <el-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />

    <div>
      <el-card class="box-card" v-for="n in 20">
        <template #header>
          <el-row style="margin-right: 5px; margin-bottom: 8px;">
            <el-col>
              <el-tag class="mx-1" type="success">어머니</el-tag>
              <el-tag class="mx-1" type="warning">가족</el-tag>
            </el-col>
          </el-row>
          <el-row :gutter="20" justify="space-between">
            <el-col :span="10">
              <h1>asdfasd</h1>
            </el-col>
            <el-col :span="10">
              <p>동명철공</p>
            </el-col>
          </el-row>
          <div class="card-header">
          </div>
          <el-text>asdfasd</el-text>
        </template>
        asdfasdf??
      </el-card>
    </div>
  </div>
</template>

<style>
.el-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>