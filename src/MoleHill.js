import { useState } from 'react'
import Mole from './Mole'
import EmptySpace from './EmptySpace'

const MoleHill = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySpace toggle={setTheMole} />

    return (
        <div style={{ display: 'inline-block', width: '25vw', height: '25vw' }}>
      {displayMole}
    </div>
    )
}

export default MoleHill