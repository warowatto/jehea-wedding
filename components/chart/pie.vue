<script setup lang="ts">
import { Chart as ChartJS, Colors, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie as PieChart } from 'vue-chartjs'
import type { ChartData, ChartOptions } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

defineProps<{ data: ChartData<'pie'>, options?: ChartOptions<'pie'> }>()

</script>

<template>
  <PieChart :data="$props.data" :options="$props.options ?? {}" />
</template>