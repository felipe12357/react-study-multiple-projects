import { useState } from 'react';
import Card from './Card';
import data from '../data';
import './birthday.css';
function Birthday() {
    const [people,setPeople] = useState(data);
    const handleClick=()=> setPeople([])
      
    return (
        <main className='container'>
            <h2>{people.length} Birthdays Today </h2>
            {people.map(person =>  <Card key={person.id} {...person} />)}
            <button className="btn--pink" onClick={handleClick}>clear all</button>
        </main>
    )
}

export default Birthday