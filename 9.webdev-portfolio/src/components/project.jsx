import React from 'react'
import { SectionTitle } from './sectionTitle'
import {projects } from '../assets/data';
import ProjectsCard from './projectsCard';
const Project = () => {
  return (
    <section className='py-16 align-element' id="projects">
        <SectionTitle text="web creations"></SectionTitle>
        <div className='py-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {
                projects.map((project)=><ProjectsCard key={project.id} {...project}></ProjectsCard>)
            }
        </div>
        
    </section>
  )
}

export default Project