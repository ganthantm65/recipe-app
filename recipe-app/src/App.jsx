import { useState } from 'react'
import LinkRouter from './router/LinkRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <LinkRouter />
    </BrowserRouter>
  )
}

export default App
