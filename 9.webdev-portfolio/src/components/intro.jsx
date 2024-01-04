import React from 'react'
import introImage from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
const intro = () => {
  return (
    <section className='bg-lime-100 py-24'>
        <div className=' align-element
                        md:grid-cols-2 items-center gap-8'>
            <article>
                <h2 className='text-6xl font-bold tracking-wider'> I'm Andrés Felipe</h2>
                <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                    Front-end developer
                </p>
                <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                    turning ideas into interactive reality
                </p>
                <div className='flex gap-x-4 mt-4'>
                    <a href='#'><FaGithubSquare className='h-8 w-8 text-lime-600 hover:text-lime-800 duration-300'></FaGithubSquare></a>
                    <a href='#'><FaLinkedin className='h-8 w-8 text-lime-600 hover:text-lime-800 duration-300'></FaLinkedin></a>
                    <a href='#'><FaTwitterSquare className='h-8 w-8 text-lime-600 hover:text-lime-800 duration-300'></FaTwitterSquare></a>
                </div>
            </article>
            <article className='hidden md:flex justify-end'>
                <img src={introImage} className='h-80 lg:h-96'></img>
            </article>
               
        </div>
    </section>
  )
}

export default intro