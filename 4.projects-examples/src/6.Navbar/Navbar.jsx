
import {links,social } from '../data';
import logo from '../assets/logo.svg';
import './navbar.css';
import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    const [showLinks,setShowLinks] =useState(false);
    const linksRef = useRef(null)

    const handleShowLinks = ()=>{
       /*  console.log(linksRef.current.clientHeight);
        console.log(linksRef.current.getBoundingClientRect())
        console.log(linksRef.current.getBoundingClientRect().height) */
        setShowLinks(!showLinks)
    }

    const linkStyle = {
        height:(showLinks) ? `${linksRef.current.clientHeight}px` :'0px'
    }

  return (
    <nav className='nav-centered' id="home">

        <div className='nav-header'>
            <img className='nav-img' src={logo} alt="logo"/>
            <button className='nav-toogle' onClick={()=>handleShowLinks()}><FaBars></FaBars></button>
        </div>
        
            <div className="links-container" style={linkStyle}>
                    <nav className='links' ref={linksRef}>
                    {  links.map(link  => <a className="link" key={link.id} href={link.url}>{link.text}</a>) }
                    </nav>
            </div>
            <div className='social-media'>
                { social.map(({id,url,icon}) => <a key={id} href={url} target='_blank' rel="noreferrer"> {icon} </a>)}
            </div>
    </nav>
  )
}

export default Navbar