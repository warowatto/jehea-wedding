<script setup lang="ts">
import type { ChartData } from 'chart.js'

const route = useRoute();

const { data } = useAsyncData(
  async () => $fetch<{
    [key in string]: { data: Record<string, number>, notice?: string }
  }>(`/data/${route.params.group}/chart.json`, {
    method: 'GET'
  }),
  { immediate: true, default: () => ({}) },
)

const { data: dashboard } = useAsyncData(
  async () => $fetch<{ total: number[] }>(`/data/${route.params.group}/dashboard.json`),
  { immediate: true }
)

const charts = computed<Record<string, { data: ChartData<'pie'>, notice?: string }> | null>(
  () => {
    if (!data.value) return null;
    let chart: Record<string, { data: ChartData<'pie'>, notice?: string }> = {};
    for (const key in data.value) {
      const lables = Object.keys(data.value[key]?.data) as string[];
      const values = Object.values(data.value?.[key].data) as number[]
      chart[key] = {
        data: {
          labels: lables,
          datasets: [{
            data: values,
            backgroundColor: ['#4D4D4D', '#B46060', '#FFBF9B', '#FFF4E0'],
            borderWidth: 0,
          }]
        },
        notice: data.value[key].notice
      }
    }
    return chart;
  }
);
</script>

<template>
  <div>
    <el-row :gutter="20" justify="space-between">
      <el-col :span="15">
        <h1 style="margin-top: 10px;">참여해주신 분들</h1>
      </el-col>

      <el-col :span="5">
        <el-button style="margin-top: 10px;" text @click="navigateTo({
          path: `/${$route.params.group}/search`
        })">
          <span ripple class="material-symbols-outlined">
            search
          </span>
        </el-button>
      </el-col>
    </el-row>

    <el-row>
      많은 분들이 참여해 주셨지만, 혼란스러운 상황에 참여하신분의 성함을 전부 여쭤볼 수 없었습니다.
      <br />
      <br />
      해당 자료는 후원해주신 개인 및 단체의 축의금을 바탕으로 제작되었다는 점을 알립니다.
    </el-row>

    <el-divider />

    <el-row justify="center">
      <el-col :span="6">
        <el-statistic title="총계" :value="dashboard?.total[0]" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="식장방문" :value="dashboard?.total[1]" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="계좌이체" :value="dashboard?.total[2]" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="대면전달" :value="dashboard?.total[3]" />
      </el-col>
    </el-row>

    <el-divider />

    <div v-for="row, key in charts">
      <el-row>
        <el-col>
          <h3>{{ key }}</h3>
        </el-col>
      </el-row>

      <el-row :gutter="20" justify="center">
        <el-col :span="14">
          <chart-pie :data="row.data" />
        </el-col>
      </el-row>
      <p v-if="row.notice">{{ row.notice }}</p>

      <el-divider />
    </div>
  </div>
</template>