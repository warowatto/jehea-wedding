<script setup lang="ts">
const { $dayjs } = useNuxtApp();

const start = $dayjs('2023-03-25 14:00:00')
const now = useNow({ interval: 1000 })
const { count: types, inc } = useCounter(2)
const format = computed(() => {
  return ['year', 'month', 'day', 'hour', 'minute', 'second'][types.value % 6];
})
const dday = computed<number>(() => {
  // @ts-ignore
  return $dayjs(now.value).diff(start, format.value);
})
</script>

<template>
  <div>
    <el-row justify="space-between">
      <el-col :span="10">
        <p style="{ size: 120px;}">Re:start</p>
      </el-col>
      <el-col :span="10">
        <h4>{{ start.format('YY/MM/DD HH:mm') }}</h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col><el-button @click="navigateTo({ path: '/bride/chart/'})">신부측 도와주신분</el-button></el-col>
    </el-row>
    <el-link type="primary" @click="inc()">{{ dday.toLocaleString() }}</el-link>
  </div>
</template>
