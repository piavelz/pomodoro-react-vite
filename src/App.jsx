import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';

import SectionTimerInput from './components/SectionTimerInput/SectionTimerInput';
import Timmer from './components/Timmer/Timmer';
import Help from './components/Help/Help';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <Header title="Pomodoro"/>
    <Help/>
      <SectionTimerInput ></SectionTimerInput>

      <Timmer/>



      </main>
    </>
  )
}

export default App
