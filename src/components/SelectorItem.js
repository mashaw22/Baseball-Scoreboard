import React from "react"

export default function SelectorItem({isSelected}) {
    const styles = {
        backgroundColor: isSelected ? "#FF721A" : "#626262"
    }

    return (
        <div 
            className="selector" 
            style={styles} 
        >
        </div>
    )
}