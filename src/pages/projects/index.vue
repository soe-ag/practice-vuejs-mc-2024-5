<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'
import { projectsQuery, type Projects } from '@/utils/supaQueries'

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
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  // console.log('Projects: ', data)
  projects.value = data
  console.log('Projects: ', projects)
}

await getProjects()

const columns: ColumnDef<Projects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) =>
      h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full'
        },
        () => row.getValue('name')
      )
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue('status'))
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) =>
      h('div', { class: 'text-left font-medium' }, JSON.stringify(row.getValue('collaborators')))
  }
]
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
