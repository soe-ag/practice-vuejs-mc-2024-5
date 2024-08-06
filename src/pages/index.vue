<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project one</RouterLink>
    <br />
    <br />
    <RouterLink :to="{ name: '/projects/' }">Go to Projects</RouterLink>
    <br />
    <br />
    <RouterLink :to="{ name: '/projects/tasks/' }">Go to Tasks</RouterLink>
  </div>
</template>
