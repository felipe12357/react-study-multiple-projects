import React from 'react';
import './footer.css';
import { pageLinks,socialMedia } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__links'>
            { pageLinks.map(({text,url,id}) => <a key={id} href={url} className='alink'>{text}</a>) }
        </div>
        <div className='footer__social'>
            { socialMedia.map(({id,url,icon}) => <a key={id} href={url} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={icon} className='fa-2x'/></a>) }
        </div>
        <div  className='footer__copyright'>Copyright Andrés Tamayo</div>
    </footer>
   
  )
}

export default Footer