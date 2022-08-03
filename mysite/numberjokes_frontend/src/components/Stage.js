import { useEffect, useState } from "react"

export default function Stage(joke){
    const [stagedJoke, set_joke] = useState(joke.props)
    return (
        <div>
            <span> {stagedJoke.name} </span>
            {stagedJoke.content.joke_parts.map((jp,i)=> 
                <ul obj={jp} key={i}>
                {jp.map((pt,j)=>
                <li key={j}>{pt}</li>)}
            </ul>)
            }
        </div>
    )
}

