<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'Tasks Page'

const tasks = ref<TasksWithProjects | null>(null)
//IIFE immediately invoked function expression
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  // console.log('Projects: ', data)
  tasks.value = data
  console.log('Projects: ', tasks.value)
}

await getTasks()
</script>

<template>
  <div>
    <!-- <h1>Tasks Page</h1> -->
    <RouterLink to="/">Home</RouterLink>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
