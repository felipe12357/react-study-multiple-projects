import React from 'react';
import './tours.css';
import { tours } from '../../data';
import Tile from '../tile/Tile';
const Tours = () => {
    return (
        <section className='tours' id="tours">
         <h1 className='section__title'>FEATURED</h1>
         <div className='section__container'>
            { tours.map(tour => <Tile {...tour}  key={tour.id}/>) }
         </div>  
        </section>
       )
}

export default Tours