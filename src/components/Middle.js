import React from "react"
import ballStrikeOutData from "../data/ballStrikeOutData"
import StrikeOutItem from "./StrikeOutItem"
import {nanoid} from "nanoid"

export default function Middle() {
    const ballStrikeOutElements = ballStrikeOutData.map(item => {
        return (
            <StrikeOutItem key={nanoid()} name={item.name} numberOfSelectors={item.numberOfSelectors} selectors={item.selectors}/>
        )
    })

    return(
        <div className="middle-section">
            {ballStrikeOutElements}
        </div>
    )
}