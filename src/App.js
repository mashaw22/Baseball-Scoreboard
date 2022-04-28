import React from "react"

export default function App() {
    return (
        <main className="main">
            <div>
                <h2 className="title">HOME</h2>
                <h2 className="score">00</h2>
                <p className="sub-title">BALL</p>
                <div className="ball-section"></div>
            </div>

            <div>
                <h2 className="inning">6</h2>
                <h2 className="title">INNING</h2>
                <p className="sub-title">STRIKE</p>
                <div className="strike-section"></div>
            </div>

            <div>
                <h2 className="title">GUEST</h2>
                <h2 className="score">12</h2>
                <p className="sub-title">OUT</p>
                <div className="out-section"></div>
            </div>
        </main>
    )
}