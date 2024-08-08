<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from 'database/types'
import DataTable from '@/components/ui/data-table/DataTable.vue'

const tasks = ref<Tables<'tasks'>[] | null>(null)
//IIFE immediately invoked function expression
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  // console.log('Projects: ', data)
  tasks.value = data
  console.log('Projects: ', tasks.value)
})()

import { h } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue('name'))
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
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue('project_id'))
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
    <h1>Tasks Page</h1>
    <RouterLink to="/">Home</RouterLink>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
