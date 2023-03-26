<script setup lang="ts">
defineProps<{ src: string }>();
</script>

<template>
  <div class="container">
    <!-- <img :src="$props.src" class="image" /> -->
    <el-image :src="$props.src" fit="cover" class="image" />
    <div class="gradient"></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
}

.image {
  display: inline-block;
  position: absolute;
  vertical-align: top;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, transparent 0%, #141414 100%);
  filter: blur(0px);
}
</style>
