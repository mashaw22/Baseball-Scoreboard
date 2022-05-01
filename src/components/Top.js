import React from "react"
import Plus from "../Plus"
import Minus from "../Minus"

export default function Top(props) {
    return (
        <div className="top-section">
            <div className="top-section__individual">
                <h2 className="title">HOME</h2>
                <div className="score-display">
                    <Minus className="minus"/>
                    <Plus className="plus"/>
                    <h2 className="score">01</h2>
                </div>
            </div>

            <div className="top-section__individual">
                <h2 className="title">INNING</h2>
                <div className="score-display">
                    <Minus className="minus"/>
                    <Plus className="plus"/>
                    <h2 className="score">6</h2>
                </div>
            </div>

            <div className="top-section__individual">
                <h2 className="title">GUEST</h2>
                <div className="score-display">
                    <Minus className="minus"/>
                    <Plus className="plus"/>
                    <h2 className="score">12</h2>
                </div>
            </div>

        </div>
    )
}