<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

//IIFE immediately invoked function expression
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  console.log('Projects: ', data)
})()
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project one</RouterLink>
    <br />
    <br />
    <RouterLink :to="{ name: '/projects/' }">Go to Projects</RouterLink>
  </div>
</template>
