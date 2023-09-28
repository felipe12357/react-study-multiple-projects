import React from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../img/logo.svg';
import { pageLinks,socialMedia } from '../../data';


const Header = () => {
  
  return (
    <div className='header' id="home">
       {/*  forma de incluir una imagen cuando esta dentro de source */}
        <img src={logo} alt="logo"/>
        <nav className='menu'>
          {  pageLinks.map(link  => <a key={link.id} href={link.url}>{link.text}</a>) }
        </nav>
        <div className='social-media'>
          { socialMedia.map(({id,url,icon}) => <a key={id} href={url} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={icon} className='fa-2x'/></a>)}
        </div>
    </div>
  )
}

export default Header