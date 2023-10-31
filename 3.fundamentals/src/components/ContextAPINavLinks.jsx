import ContextAPIUserContainer from './ContextAPIUserContainer';
const ContextAPINavLinks = () => {
  return (
    <div className='nav-container'>
        <ul className="nav-links">
            <li className='link'><a href='#'>Home</a></li>
            <li className='link'><a href='#'>About</a></li>
        </ul>
        <ContextAPIUserContainer></ContextAPIUserContainer>
    </div>
  )
}

export default ContextAPINavLinks