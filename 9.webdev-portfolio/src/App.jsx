
import './App.css'
import Navbar from './components/navbar';
import Intro from './components/intro';
import Skills from './components/skills';
import About from './components/about';
import Project from './components/project';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <About></About>
      <Project></Project>
    </>
  )
}

export default App
