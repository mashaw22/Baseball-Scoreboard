import React, {useState} from "react"
import Left from "./components/Left"
import Middle from "./components/Middle"
import Right from "./components/Right"

export default function App() {
    const [homeScore, setHomeScore] = useState(0)
    const [guestScore, setGuestScore] = useState(0)
    const [inning, setInning] = useState(0)

    

    return (
        <main>
            <div className="main">
                <section className="overlay">For best results, rotate device to landscape mode.</section>
                <Left />
                <Middle />
                <Right />
            </div>
            <div className="clear-btns">
                <button className="clear-btn">Clear</button>
                <button className="clear-all-btn">Clear All</button>
            </div>
        </main>
    )
}