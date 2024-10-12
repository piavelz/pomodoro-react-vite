import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <main>
      <Header title="Pomodoro"/>
      
        <span className='help-icon'></span>
      </main>
    </>
  )
}

export default App
