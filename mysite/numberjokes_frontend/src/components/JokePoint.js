import { useEffect, useState } from "react"

export default function JokePoint(props){
    // props: {number: int, pause_before_render: int(milliseconds), punchline(bool)}
    
    const [showComponent, setShowComponent] = useState(false)
    console.log(`PROPS: ${props.props}`)
    // let joke_point_data = props.props
    // let {number, pause_before_render, punchline }= joke_point_data

    useEffect(() => {
        setInterval(() => {
            setShowComponent(!showComponent);
        }, 1000);
    }, [])
    //console.log(`NUMBER: ${number.values}`)
    return(
            <div>{showComponent && <div>{props}</div>}</div>
    )

}