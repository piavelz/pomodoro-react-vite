import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';

import SectionTimerInput from './components/SectionTimerInput/SectionTimerInput';
import Timmer from './components/Timmer/Timmer';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <main>
      <Header title="Pomodoro"/>
        <span className='help-icon'></span>
      <SectionTimerInput ></SectionTimerInput>

      <Timmer/>



      </main>
    </>
  )
}

export default App
