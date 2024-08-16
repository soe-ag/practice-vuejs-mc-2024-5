<script setup lang="ts">
import { usePageStore } from '@/stores/page'

usePageStore().pageData.title = 'HomePage'
</script>

<template>
  <div>
    <!-- <h1>Home Page</h1> -->
    <!-- <RouterLink :to="{ name: '/projects/[slug]', params: { id: 1 } }">Go to Project one</RouterLink> -->
    <br />
    <br />
    <RouterLink :to="{ name: '/projects/' }">Go to Projects</RouterLink>
    <br />
    <br />
    <RouterLink :to="{ name: '/tasks/' }">Go to Tasks</RouterLink>
  </div>
</template>
