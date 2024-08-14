<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from 'database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'

const projects = ref<Tables<'projects'>[] | null>(null)
//IIFE immediately invoked function expression
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  // console.log('Projects: ', data)
  projects.value = data
  console.log('Projects: ', projects)
})()

const columns: ColumnDef<Tables<'projects'>>[] = [
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
    <h1>Projects Page</h1>
    <RouterLink to="/">Home</RouterLink>
    <!-- <pre>
      {{ projects }}
    </pre> -->
    <!-- <div v-for="project in projects" :key="project.id" class="">{{ project.name }}</div> -->

    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>
