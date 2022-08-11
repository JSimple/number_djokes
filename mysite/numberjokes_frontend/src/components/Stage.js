import Explanation from "./Explanation";
import { useEffect, useState } from "react"
import { round_num } from "../lib/formatting";
import JokePoint from "./JokePoint";

export default function Stage(props){
    
    const [showExplanation, setShowExplanation] = useState(false)

    if (!props.joke){
        return <div>...</div>
    }

    const toggleButton = props.toggleButton
    const joke_parts = props.joke.content.joke_parts;

    const joke_array = joke_parts.map(jp => jp.points)
    const display_array = joke_array.map(jp => jp.map(num => round_num(num)))
    let flat_display_array = []

    
    display_array.forEach(array => {
        flat_display_array = flat_display_array.concat(array)
        flat_display_array.push('')
    })
    flat_display_array.pop()
    flat_display_array.push(':-P')
    
    const coefs_array = joke_parts.map(jp => jp.polynomial)
    const display_coefs = coefs_array.map(jp => jp.map(num => round_num(num))) 

    let toggleButtonCallback = () => {}
    let showExplanationCallback = () => {}
   
    return (
        <div>
            <span> Joke: </span>
            <div className='jokeContainer'>
                {/* {display_array.map((joke_part, j) =>  */}
                
                    <ul>
                    {flat_display_array.map((point, i) => {
                        if (i === flat_display_array.length-1){
                            toggleButtonCallback = toggleButton
                            showExplanationCallback = () => setShowExplanation(true)
                        }
                        return(
                            <li obj={point} key={i}> 
                            <JokePoint 
                            idx={i} 
                            point={point} 
                            rendered={false}
                            toggleButtonCallback={toggleButtonCallback}
                            showExplanationCallback={showExplanationCallback}
                            /> 
                            </li>
                        )
                        }
                    )}
                    </ul>
            </div>
                {showExplanation? <Explanation coefs={display_coefs}/> : <div></div>}
        </div>
    )

}

// set interval