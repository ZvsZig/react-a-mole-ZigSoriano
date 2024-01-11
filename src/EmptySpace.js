import { useEffect } from "react"
import MoleHill from './molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
    <img style={{ display: 'inline-block', width: '25vw', height: '25vw' }} src={MoleHill} alt="Empty Slot" />
    </div>
    )
}

export default EmptySlot