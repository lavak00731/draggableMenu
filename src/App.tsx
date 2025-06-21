import { useState } from 'react';
import pagesBase from './lib/pagesBase';
import { RoutesNav } from './routes/RoutesNav';
import { Nav } from './components/Nav';
import { Pages } from './context/context';
import './App.css'

function App() {
  const [pages, setPages] = useState(pagesBase)

  return (
    <>
     <Pages value={{ pages, setPages }}>
      <RoutesNav  />
      <Nav   />
     </Pages>
      
    </>
  )


  
}

export default App
