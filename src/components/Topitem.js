import React, {useState, useEffect} from "react"
import Plus from "../icons/Plus"
import Minus from "../icons/Minus"

export default function Topitem({name, value}) {
    const [count, setCount] = useState(value)
    const [minusIsDisplayed, setMinusIsDisplayed] = useState(false)

    function getMinusClassName() {
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

    function displayScore() {
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
                <Minus className={getMinusClassName()} subtractCount={subtractCount}/>
                <Plus className="plus" addCount={addCount}/>
                <h2 className="score">{displayScore()}</h2>
            </div>
        </div>
    )
}