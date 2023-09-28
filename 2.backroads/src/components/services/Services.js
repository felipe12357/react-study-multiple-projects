import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services } from '../../data';
import './services.css';
const Services = () => {
  return (
   <section className='service' id="services">
    <h1 className='service__section__title'>OUR</h1>
    <div className='service__container'>
        {
            services.map(({icon,id, title, text})=>(
                <article className='service__item' key={id}>
                    <div><FontAwesomeIcon icon={icon} className='fa-2x service__icon'/></div>
                    <div>
                        <h4 className='service__title'>{title}</h4>
                        {text}
                    </div>
                </article>
            ))
        } 
    </div>  
   </section>
  )
}

export default Services