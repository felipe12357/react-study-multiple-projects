import React from 'react'
import './about.css';
import imgbench from '../../img/about.jpeg';

const AboutUs = () => {
  
  return (
    <section className='about' id="about">
      <h1 className='about__title'>ABOUT</h1>
      <div>
        <img className="about__img" src={imgbench} alt={imgbench}/>
      </div>
      <div>
        <h3>Explore The Difference</h3>
        <p>
          En su sentido más general, la palabra "mundo" se refiere a la totalidad de entidades, al conjunto de la realidad o a todo lo que fue,
          es y será.1​ La naturaleza del mundo se ha conceptualizado de diferentes maneras en distintos ámbitos. 
          Algunas concepciones ven el mundo como algo único. Por otra parte, mientras que otras hablan de una "pluralidad de mundos", 
          algunos tratan el mundo como un objeto simple mientras que otros analizan el mundo como un complejo compuesto por muchas partes.
          En la cosmología científica, el mundo o el universo se define comúnmente como "la totalidad de todo el espacio y el tiempo;
          todo lo que es, ha sido y será". Las teorías de la modalidad, por otro lado, hablan de mundos posibles como maneras completas 
          y consistentes de cómo podrían haber sido las cosas. La fenomenología, partiendo del horizonte de los objetos co-presentes en la periferia
          de cada experiencia, define el mundo como el horizonte más grande o el "horizonte de todos los horizontes"
        </p>
        <button className='btn'>Read More</button>
      </div>
    </section>
  )
}

export default AboutUs