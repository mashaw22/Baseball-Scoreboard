import React from "react"

export default function Left() {
    return(
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
    )
}