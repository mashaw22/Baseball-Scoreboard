import React from "react"
import Top from "./components/Top"
import Middle from "./components/Middle"
import Buttons from "./components/Buttons"


export default function App() { 

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