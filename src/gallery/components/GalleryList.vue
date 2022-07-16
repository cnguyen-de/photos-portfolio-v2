<template>
  <div v-for="gallery in galleries" :key="gallery?.sys?.id">
    {{ gallery?.title }}
    {{ gallery?.author?.name }}
    <img :src="gallery?.coverImage?.url" />
    {{ gallery?.sys?.id }}
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePhotoGalleryStore } from '../data/store/photoGallery.store'

const store = usePhotoGalleryStore()
const galleries = computed(() => store.galleries)

onMounted(async () => {
  await store.fetchGalleries()
})
</script>