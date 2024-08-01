import { useState } from 'react'

import './App.css'
import SearchFilter from './components/SearchFilter/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchFilter/>
    </>
  )
}

export default App
