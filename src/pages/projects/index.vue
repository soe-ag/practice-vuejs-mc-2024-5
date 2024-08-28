<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects Page'

const projects = ref<Projects | null>(null)
//IIFE immediately invoked function expression
// ;(async () => {
//   const { data, error } = await supabase.from('projects').select()

//   if (error) console.log(error)

//   // console.log('Projects: ', data)
//   projects.value = data
//   console.log('Projects: ', projects)
// })()

const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  // console.log('Projects: ', data)
  projects.value = data
  console.log('Projects: ', projects)
}

await getProjects()
</script>

<template>
  <div>
    <!-- <h1>Projects Page</h1> -->
    <RouterLink to="/">Home</RouterLink>
    <!-- <pre>
      {{ projects }}
    </pre> -->
    <!-- <div v-for="project in projects" :key="project.id" class="">{{ project.name }}</div> -->

    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>
