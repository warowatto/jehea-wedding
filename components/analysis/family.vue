<script setup lang="ts">
import type { ChartData } from 'chart.js';

const props = defineProps<{
  labels: string[],
  datas: number[]
}>()

const data = computed<ChartData<'pie'>>(() => {
  return {
    labels: props.labels,
    datasets: [
      { data: props.datas }
    ]
  }
})

</script>

<template>
  <chart-pie :data="data" />
</template>