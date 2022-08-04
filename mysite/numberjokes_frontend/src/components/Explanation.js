export default function Explanation(props){
    let joke_parts = props.props
    let explanations = []
    // for (let i = 0; i < joke_parts.length)
    return(
        <div>
            <p>This joke was funny because first you thought the numbers followed this rule:</p>
            <span>{joke_parts[0].polynomial}</span>
            <p>but then the punchline revealed that they actually follow this rule:</p>
            <span>{joke_parts[1].polynomial}</span>
            {joke_parts[3] && 
                <p> and then the kicker revealed that they actually follow this rule:</p> &&
                <span>{joke_parts[3].polynomial}</span>
            }
        </div>
    )
}