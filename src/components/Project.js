import React from 'react'
import Spinner from './Spinner'
import ProjectCard from './ProjectCard'
import { useQuery } from '@apollo/client'
import {GET_PROJECTS} from '../queries/projectQueries'
function Project() {
    const {loading ,error,data}=useQuery(GET_PROJECTS)
    if (loading) return <Spinner/>
    if (error) return <p>Something went wrong {error.message}</p>
  return (
   <>
      {data.projects.length>0?(
      <div className='row mt-3'>
        {data.projects.map((project)=>(
            <ProjectCard key={project.id} project={project}/>
        ))}
      </div>):
      (<p>No projects</p>)}

      </>
    
  )
}

export default Project
