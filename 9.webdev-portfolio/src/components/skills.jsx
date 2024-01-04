import React from 'react'
import { SectionTitle } from './sectionTitle'
import { skills } from '../assets/data';
import SkillsCard from '../components/skillsCard';
const Skills = () => {
  return (
    <section className='py-16 align-element' id="skills">
        <SectionTitle text={'tech stack'}></SectionTitle>
        <div className='py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map(skill => <SkillsCard key={skill.id} {...skill}></SkillsCard>)}
        </div>
    </section>
  )
}

export default Skills