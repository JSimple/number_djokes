export default function about(){
    return (
        <div>
            <h1>What is a Number Joke?</h1>
            <p>
                A number joke is an ordered sequence of numbers, the progression of which mimics the structure of a joke. 
                For example:
            </p>
            <p style="padding: 10px; border: 2px solid gainsboro;">
                <b>a natural language joke</b>
                <p>
                    "When I was a kid my parents moved a lot, but I always found them"
                    –Rodney Dangerfield
                </p>
            </p>
            <p style="padding: 10px; border: 2px solid gainsboro;">
                <b>a number joke</b>
                <p>
                    "3, 6, 9, 12, ... -9977, -49942, -149859"
                    –This Website
                </p>
            </p>
            <p>
                It may not look like it but both of these jokes follow a similar structure:
            </p>
            <ul>
                <li>
                    a <b>setup</b> that establishes an <b>expected rule</b> through which you're interpreting the joke. followed by...
                </li>
                <li>
                    a <b>punchline</b> that violates this rule, thereby making you realize that <b>a different, less obvious, rule</b> was at play the whole time.
                </li>
            </ul>
            <p>
                In a natural language joke these rules are symantic or syntactic. In a number joke the rules are mathematical and can often be represented as functions. Take our examples:
            </p>
            <p style="padding: 10px; border: 2px solid gainsboro;">
                <b>natural language joke</b>
                <ul>
                    <li>setup:  "When I was a kid my parents moved a lot,"</li>
                    <li>the implied rule:  <i>The word "move" in this joke means something like "changing homes as a family."</i></li>
                    <li>punchline:   "but I always found them."</li>
                    <li>the actual rule:   <i>The word "move" in this joke actually means to literally just move around in space.</i></li>
                </ul>
            </p>
            <p style="padding: 10px; border: 2px solid gainsboro;">
                <b>number joke</b>
                <ul>
                    <li>setup:  "3, 6, 9, 12" </li>
                    <li>the implied rule:  <i>Joke(n) = 3 + 3n</i></li>
                    <li>punchline:   "-9977, -49942, -149859"</li>
                    <li>the actual rule:   <i>Joke(n) = 3 + 2501n - 4579.667(n ** 2) + 2498(n ** 3) - 416.333(n ** 4)</i> (and yes the setup of  "3, 6, 9, 12" does indeed follow this complicated rule ) </li>
                </ul>
            </p>
            <h1>
                Why should you care about number jokes? 
            </h1>
            <p>
                The short answer is that you shouldn't.  

                The long answer is that for millenia psychologists, philosophers, and humorists have been trying to come up with theories of what makes something funny. All these theories have been notoriously hard to prove experimentally. Some of them even seem to be unfalsifiable. 

                But now with number jokes we have a way to mathematically model a theory of humor. The theory that number jokes are based on is the <a>script-based semantic theory of humor</a href='https://en.wikipedia.org/wiki/Theories_of_humor#Script-based_Semantic_Theory_of_Humor'> (Victor Raskin: Semantic Mechanisms of Humor, 1985) Creating an abstract mathematical model of a theory is the first step in establishing rigorous scientific proof of the theory. We can use mathematical models to make predictions and test them in real life experiments. As we generate number jokes, control for various parameters, and see which one people find funny - we may be able to establish proof for how humor itself works.
            </p>
            <h1>This is a joke, right?</h1>
            <p>Yes.</p>
        </div>
    )
}