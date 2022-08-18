import { format_polynomial } from "../utility/formatting"
import { useState, useEffect } from "react"

export default function Explanation(props){
    let coefs = props.coefs



    const [showComponent, setShowComponent] = useState(false)


    useEffect(() => {

        setShowComponent(false)

        setTimeout(() => {
            setShowComponent(true);
        }, 2000 );

    }, [])

    if (!showComponent){
        return (<div></div>)
    }

    return(
        <div>
            <p>This joke was funny because first you thought the numbers followed this rule:</p>
            <span className="jokeContainer">{format_polynomial(coefs[0])}</span>
            <p>but then the punchline revealed that they actually follow this rule:</p>
            <span className="jokeContainer">{format_polynomial(coefs[1])}</span>
            {coefs[2] && 
                <p> and then the kicker revealed that they actually follow this rule:</p> &&
                <span className="jokeContainer">{format_polynomial(coefs[2])}</span>
            }
        </div>
    )
}