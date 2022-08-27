import { useState } from "react"

export default function GenerateButton(props) {
    let {enabled, toggleButton} = props
    return (
        <button 
        type='submit'
        disabled = {!enabled}
        >generate joke
        </button>
    )

}