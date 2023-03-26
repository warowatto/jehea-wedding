<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue'

const route = useRoute();
const image = computed(() => {
  switch (route.params.group as string) {
    case 'groom':
      return '/groom.jpg';
    case 'bride':
      return '/bride.jpg';
    default:
      return '/header.jpg';
  }
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header height="40vh">
        <blur-image :src="image" />
      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>

    <div class="back" @click="$router.back()">
      <el-icon size="24" color="white">
        <ArrowLeftBold />
      </el-icon>
    </div>
  </div>
</template>

<style>
.back {
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;
}
</style>