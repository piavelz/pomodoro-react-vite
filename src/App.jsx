import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import SectionTimerInput from './components/SectionTimerInput/SectionTimerInput';
import Timmer from './components/Timmer/Timmer';
import Help from './components/Help/Help';
import Notes from './components/Notes/Notes';



function App() {
  const [pomodoro, setPomodoro] = useState(25);
  const [breakTime , setBreakTime]=useState(5);
  const [selectedCycle, setSelectedCycle]= useState(4);
console.log(pomodoro)
console.log(breakTime

)

  return (
    <>
      <main>
      <Header title="Pomodoro"/>
      <Help/>
      <SectionTimerInput 
      cycles ={selectedCycle}
      setCycles ={setSelectedCycle}
      pomodoroTime = {pomodoro}
      setPomodoroTime = {setPomodoro}
      breakTime ={breakTime}
      setBreakTime ={setBreakTime}
      />
      <Notes/>
      <Timmer
      cycles ={selectedCycle}
      pomodoroTime ={pomodoro}
      breakTime={breakTime}
      />





      </main>
    </>
  )
}

export default App
