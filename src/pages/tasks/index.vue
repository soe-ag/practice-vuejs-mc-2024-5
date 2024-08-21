<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ColumnDef } from '@tanstack/vue-table'
import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Tasks Page'

const tasks = ref<TasksWithProjects | null>(null)
//IIFE immediately invoked function expression
const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  // console.log('Projects: ', data)
  tasks.value = data
  console.log('Projects: ', tasks.value)
}

await getTasks()

const columns: ColumnDef<TasksWithProjects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) =>
      h(
        RouterLink,
        {
          to: `/tasks/${row.original.id}`,
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
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date'),
    cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue('due_date'))
  },
  {
    accessorKey: 'projects',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) =>
      row.original.projects
        ? h(
            RouterLink,
            {
              to: `/projects/${row.original.projects.slug}`,
              class: 'text-left font-medium hover:bg-muted block w-full'
            },
            () => row.original.projects?.name
          )
        : ''
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
    <!-- <h1>Tasks Page</h1> -->
    <RouterLink to="/">Home</RouterLink>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
