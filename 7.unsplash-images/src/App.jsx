
import './App.css'
import { useAppGlobalContext } from './GlobalContext';

import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';
import SearchForm  from './components/SearchForm';

function App() {
  const {isDarkTheme} = useAppGlobalContext();
  
  return (  
      <main className={`main-theme ${isDarkTheme ? 'dark-background' : 'highlight-background'}`}>
        <ThemeToggle></ThemeToggle>
        <SearchForm></SearchForm>
        <Gallery></Gallery>
      </main>
  )
}

export default App
