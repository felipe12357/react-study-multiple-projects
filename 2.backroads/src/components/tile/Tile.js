import React from 'react';
import './tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap  } from '@fortawesome/free-solid-svg-icons';
const Tile = ({img,title,text,location,duration,cost,date}) => {
    return <div className='tile'>
        <div>
            <img className="img" src={img} alt={title}/>
            <span className='date'>{date.toDateString()}</span>
        </div>
        <div className='tile__description'>
            <h4>{title}</h4>
            <p>{text}</p>
            <div className='tile__summary'>
                <div><FontAwesomeIcon icon={faMap} /> {location}</div>
                <div>{duration}</div>
                <div>${cost}</div>
            </div>
        </div>
    </div>
}
export default Tile;