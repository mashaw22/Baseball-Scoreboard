import React from "react"

export default function Middle() {
    return(
        <div className="middle-section">
            <div>
                <p className="sub-title">BALL</p>
                <div className="ball-section">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>

            <div>
                <p className="sub-title">STRIKE</p>
                <div className="strike-section">
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>

            <div>
                <p className="sub-title">OUT</p>
                <div className="out-section">
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>
        </div>
    )
}