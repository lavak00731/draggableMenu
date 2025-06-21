import { useState } from 'react';
import pagesBase from './lib/pagesBase';
import { RoutesNav } from './routes/RoutesNav';
import { Nav } from './components/Nav';
import { Pages } from './context/context';
import type { pagesTypes } from './types/pagesTypes';
import './App.css'

function App() {
  const [pages, setPages] = useState(pagesBase)
  const changePages = (newPages:pagesTypes[]) => {
    console.log(newPages)
  }
  return (
    <>
     <Pages value={pages}>
      <RoutesNav  />
      <Nav changePages={changePages}  />
     </Pages>
      
    </>
  )


  
}

export default App
