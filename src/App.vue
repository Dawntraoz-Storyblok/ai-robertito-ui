<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TheHeader from './components/TheHeader.vue'
  import TheFooter from './components/TheFooter.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <RouterView />
    <TheFooter class="mt-auto" />
  </div>
</template>

<style scoped>
</style>
