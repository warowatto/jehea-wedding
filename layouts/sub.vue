<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>

        <div style="padding: 30px;" @click="$router.back()">
          <el-icon size="24" color="white">
            <ArrowLeftBold />
          </el-icon>
        </div>

      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </div>
</template>
