import { format_polynomial } from "../lib/formatting"

export default function Explanation(props){
    let coefs = props.props
    let explanations = []
    // for (let i = 0; i < joke_parts.length)
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