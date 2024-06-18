/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
// const personName = faker.person.fullName()

export const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

// console.log(supabase)

const seedProjects = async (numEntries) => {
  const projectsGenerated = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projectsGenerated.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3, 4, 5])
    })
  }

  await supabase.from('projects').insert(projectsGenerated)
}

await seedProjects(10)
