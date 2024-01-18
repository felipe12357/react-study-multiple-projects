import React from 'react'
import { Link } from 'react-router-dom';
import hero1 from '../../assets/hero1.webp';
import hero2 from '../../assets/hero2.webp';
import hero3 from '../../assets/hero3.webp';
import hero4 from '../../assets/hero4.webp';

const InfoHome = () => {
  const caroulselAssets = [hero1,hero2,hero3,hero4];
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div >
          <h2 className='max-w-2xl text-4xl font-bold -tracking-tight sm:text-6xl'> Changing the way people shop </h2>
          <p className='mt-8 max-w-xl text-lg leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti ullam id voluptate necessitatibus, distinctio, vitae nemo ipsum delectus sapiente itaque blanditiis, saepe qui reprehenderit nulla? Consequuntur placeat aperiam laborum!</p>
          <div className='mt-10'>
            <Link className="btn btn-primary" to="/products">Our Products</Link>
          </div>
        </div>
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
          { caroulselAssets.map((image,index) => <div className="carousel-item" key={index}> <img src={image}  /> </div> ) }
        </div>
    </div>
  )
}

export default InfoHome