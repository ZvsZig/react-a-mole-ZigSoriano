import { useEffect } from 'react'
import moleImg from './mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
      <img
        style={{ display: 'inline-block', width: '25vw', height: '25vw' }}
        src={moleImg}
        alt="Mole"
        onClick={props.handleClick}
      />
    </div>
    )
}

export default Mole