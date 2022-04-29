import React from "react"

export default function App() {
    return (
        <main className="main">
            <section className="overlay">For best results, rotate device to landscape mode.</section>
            <div>
                <h2 className="title">HOME</h2>
                <h2 className="score-display">00</h2>
                <p className="sub-title">BALL</p>
                <div className="ball-section">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>

            <div>
                <h2 className="inning-display">6</h2>
                <h2 className="title">INNING</h2>
                <p className="sub-title">STRIKE</p>
                <div className="strike-section">
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>

            <div>
                <h2 className="title">GUEST</h2>
                <h2 className="score-display">12</h2>
                <p className="sub-title">OUT</p>
                <div className="out-section">
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>
        </main>
    )
}