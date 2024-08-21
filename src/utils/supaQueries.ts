import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
export const tasksWithProjectsQuery = supabase.from('tasks').select(`*,projects(id,name,slug)`)

export type Projects = QueryData<typeof projectsQuery>
export const projectsQuery = supabase.from('projects').select()
