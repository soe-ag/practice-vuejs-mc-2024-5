<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from 'database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)
//IIFE immediately invoked function expression
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  // console.log('Projects: ', data)
  tasks.value = data
  console.log('Projects: ', tasks.value)
})()
</script>

<template>
  <div>
    <h1>Tasks Page</h1>
    <RouterLink to="/">Home</RouterLink>
    <!-- <pre>
      {{ projects }}
    </pre> -->
    <div v-for="task in tasks" :key="task.id" class="">{{ task.name }}</div>
  </div>
</template>
