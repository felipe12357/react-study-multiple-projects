import React from 'react'
import { SectionTitle } from './sectionTitle'
import aboutImg from '../assets/about.svg';
const About = () => {
  return (
    <section className='bg-white py-16 ' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutImg} className='w-full h-64'></img>
            <article>
                <SectionTitle text='About Me'></SectionTitle>
                <p className='text-slate-600 mt-8 leading-loose'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ad natus veniam aspernatur repellat temporibus quia possimus nostrum sint accusamus tenetur earum a, assumenda ex unde inventore. Obcaecati, necessitatibus hic.
                </p>
            </article>
        </div>
    </section>
  )
}

export default About