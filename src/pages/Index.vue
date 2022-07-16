<template>
  <div>
    <HelloWorld />
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '@/shell/HelloWorld.vue';
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>
