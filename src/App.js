import './App.css';
import { useState } from 'react'
import MoleHill from './MoleHill'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleHill key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
