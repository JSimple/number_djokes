import Explanation from "./Explanation";

export default function Stage(props){
    let joke = props.props;
    let content = joke.content;
    let joke_parts = content.joke_parts;
    return (
        <div>
            <span> Joke: </span>
            {joke_parts.map((jp,i)=> 
                <ul obj={jp} key={i}>
                {jp.points.map((pt,j)=>
                    <li key={j}>{pt}</li>)}
                </ul>)
            }
                <Explanation props={joke_parts}/>
        </div>
    )
}

