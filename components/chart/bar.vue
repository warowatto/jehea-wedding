<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import type { ChartData, ChartOptions } from 'chart.js'

defineProps<{ data: ChartData<'bar'>; options: ChartOptions<'bar'> }>()
</script>

<template>
  <Bar :data="$props.data" :options="$props.options" />
</template>
