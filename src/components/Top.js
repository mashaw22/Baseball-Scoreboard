import React from "react"
import Topitem from "./Topitem"
import scoresAndInningData from "../scoresAndInningData"

export default function Top(props) {

    const topElements = scoresAndInningData.map(item => {
        return (
            <Topitem key={item.name} name={item.name} value={item.value} minusIsDisplayed={item.minusIsDisplayed}/>
        )
    })
    
    return (
        <div className="top-section">
            {topElements}
        </div>
    )
}