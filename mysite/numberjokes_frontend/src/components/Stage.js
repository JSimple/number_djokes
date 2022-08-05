import Explanation from "./Explanation";
import { useEffect, useState } from "react"
import { round_num } from "../lib/formatting";

export default function Stage(props){
    const joke_parts = props.props.content.joke_parts;
    
    const joke_array = joke_parts.map(jp => jp.points)
    const display_array = joke_array.map(jp => jp.map(num => round_num(num)))
    
    const coefs_array = joke_parts.map(jp => jp.polynomial)
    const display_coefs = coefs_array.map(jp => jp.map(num => round_num(num))) 
    console.log(display_array)
    let [points, setPoints] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (points < display_array[0].length){
                setPoints(points++);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [])
    
    // useEffect(() => {
    //     for (let i = 0; i < display_array.length; i++){
    //         let joke_part_points = display_array[i]
    //         for (let j = 0; j < joke_part_points.length; j++){
    //             let point = joke_part_points[j]
    //             setTimeout(() => {
    //                 setPoints(points.push(point))
    //             }, 1000 * j * i)
    //             console.log(points)
    //         }
    //     }
    // }, [])

    return (
        <div>
            <span> Joke: </span>
            <div className='jokeContainer'>
                <span>{display_array[0][points]}</span>
                    {/* <ul>
                    {points.map((point, i) =>
                    <li obj={point} key={i}> {point} </li>
                    )}
                    </ul> */}
            </div>
                <Explanation props={display_coefs}/>
        </div>
    )

}

// set interval