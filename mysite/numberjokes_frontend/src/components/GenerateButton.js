import { useState } from "react"

export default function GenerateButton(props) {
    let {enabled, toggleButton} = props
    return (
        <button 
        type='submit'
        disabled = {!enabled}
        onClick={() => toggleButton()}
        >generate joke
        </button>
    )

}