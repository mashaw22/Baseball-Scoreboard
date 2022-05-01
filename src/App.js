import React from "react"
import Top from "./components/Top"
import Middle from "./components/Middle"
import Buttons from "./components/Buttons"


export default function App() {
    // const [homeScore, setHomeScore] = useState(0)
    // const [guestScore, setGuestScore] = useState(0)
    // const [inning, setInning] = useState(0)

    

    return (
        <main>
            <div className="main">
                <section className="overlay">For best results, rotate device to landscape mode.</section>
                <Top />
                <Middle />
                <Buttons />
            </div>
        </main>
    )
}