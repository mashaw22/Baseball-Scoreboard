import React, {useState} from "react"
import SelectorItem from "./SelectorItem"
import {nanoid} from "nanoid"

export default function StrikeOutItem({name, numberOfSelectors}) {
    const [selectors, setSelectors] = useState(generateAllNewSelectors)

    function generateNewSelector() {
        return {
            parentName: name,
            id: nanoid(),
            isSelected: false
        }
    }

    function generateAllNewSelectors() {
        const newSelectors = []
        for (let i = 0; i < numberOfSelectors; i++){
            newSelectors.push(generateNewSelector())
        }
        return newSelectors
    }

    function holdSelector() {
        const foundSelector = selectors.find(selector => !selector.isSelected)
        if (foundSelector) {
            setSelectors(prevSelectors => prevSelectors.map(selector => {
                    return foundSelector === selector ?
                        {...selector, isSelected: true} :
                        selector
                })
            )
        } else {
            setSelectors(prevSelectors => prevSelectors.map(selector => {
                return {...selector, isSelected: false}
            }))
        }
    }

    const selectorElements = selectors.map(selector => (
        <SelectorItem 
            parentName={selector.parentName} 
            key={selector.id}
            isSelected={selector.isSelected}
        />
    ))

    return(
        <div onClick={holdSelector}>
            <p className="sub-title">{name}</p>
            <div className="ball-section">
                {selectorElements}
            </div>
        </div>
    )
}