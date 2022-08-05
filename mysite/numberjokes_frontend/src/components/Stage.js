import Explanation from "./Explanation";
import { useEffect, useState } from "react"
import { round_num } from "../lib/formatting";
import JokePoint from "./JokePoint";

export default function Stage(props){
    const joke_parts = props.props.content.joke_parts;
    
    const joke_array = joke_parts.map(jp => jp.points)
    const display_array = joke_array.map(jp => jp.map(num => round_num(num)))
    
    const coefs_array = joke_parts.map(jp => jp.polynomial)
    const display_coefs = coefs_array.map(jp => jp.map(num => round_num(num))) 
    
    // const add_points_to_render = (joke_parts) => {
    //     for (let i = 0; i < joke_parts.length; i++){
    //         let points = joke_parts[i].points
    //         for (let j = 0; j < points.length; j++){
    //             let num = points[j]
    //             setTimeout(() => points_to_render.push(num), 1000 * j)  
    //         }
    //     }
    // }

    //useEffect(() => console.log(points_to_render),[points_to_render])
    
    // add_points_to_render(joke_parts)

    return (
        <div>
            <span> Joke: </span>
            <div className='jokeContainer'>
                {display_array.map((jp, j) => {
                    const joke_part_list = 
                    <ul key= {j}>
                    {jp.map((point, i) =>
                    <li obj={point} key={i}> <JokePoint props={point}/> </li>
                    )}
                    </ul>
                    return joke_part_list
                }
                )}
            </div>
                <Explanation props={display_coefs}/>
        </div>
    )

}

// set interval