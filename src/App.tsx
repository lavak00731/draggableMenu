import { useState } from 'react';
import pagesBase from './lib/pagesBase';
import { RoutesNav } from './routes/RoutesNav';
import { Nav } from './components/Nav';

import './App.css'

function App() {
  const [pages, setPages] = useState(pagesBase)

  return (
    <>
      <RoutesNav pages={pages} />
      <Nav pages={pages} />
    </>
  )


  
}

export default App
