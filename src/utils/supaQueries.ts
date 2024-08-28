import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
export const tasksWithProjectsQuery = supabase.from('tasks').select(`*,projects(id,name,slug)`)

export type Projects = QueryData<typeof projectsQuery>
export const projectsQuery = supabase.from('projects').select()

// src\utils\supaQueries.ts
export type Project = QueryData<ReturnType<typeof projectQuery>>
export const projectQuery = (slug: string) =>
  supabase.from('projects').select(`*,tasks(id,name,status,due_date)`).eq('slug', slug).single()

export type Task = QueryData<ReturnType<typeof taskQuery>>
export const taskQuery = (id: string) =>
  supabase.from('tasks').select(`*,projects(id,name,slug)`).eq('id', id).single()
