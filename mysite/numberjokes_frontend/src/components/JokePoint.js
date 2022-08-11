import { useEffect, useState } from "react"

export default function JokePoint(props){

    let {point, idx, rendered, toggleButtonCallback, showExplanationCallback} = props
    
    const [showComponent, setShowComponent] = useState(false)
    


    useEffect(() => {

        setShowComponent(false)

        setTimeout(() => {
            setShowComponent(true);
            toggleButtonCallback();
            showExplanationCallback();
        }, 1000 * (idx + 1) );

    }, [point])

    return(
            <div>{showComponent && <div>{point}</div>}</div>
    )

}

// wait_before_render
// how long it's waited so far = wait_before_render per point * the number of points so far
// the number of points so far is (i + 1) * (j + 1)