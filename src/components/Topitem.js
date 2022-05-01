import React, {useState, useEffect} from "react"
import Plus from "../Plus"
import Minus from "../Minus"

export default function Topitem({name, value}) {
    const [count, setCount] = useState(value)
    const [minusIsDisplayed, setMinusIsDisplayed] = useState(false)

    function minusClassName() {
        return minusIsDisplayed ? "minus minus--shown" : "minus--hidden"
    }

    function addCount() {
        setCount(prevCount => prevCount + 1)
    }

    function subtractCount() {
        setCount(prevCount => prevCount - 1)
    }
    
    useEffect(() => {
        if (count === value) {
            setMinusIsDisplayed(false)
            setCount(value)
        } else if (count > value) {
            setMinusIsDisplayed(true)
            addCount()
            subtractCount()
        }
    }, [count, value])

    function scoreDisplay() {
        if (count === 0) {
            return "00"
        } else if (count > 0 && count < 10) {
            return `0${count}`
        }
        return count
    }

    return (
        <div className="top-section__individual">
            <h2 className="title">{name}</h2>
            <div className="score-display">
                <Minus className={minusClassName()} subtractCount={subtractCount}/>
                <Plus className="plus" addCount={addCount}/>
                <h2 className="score">{scoreDisplay()}</h2>
            </div>
        </div>
    )
}