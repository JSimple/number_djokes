# What is this?
This is a website that generates number jokes.   
# What is a Number Joke?
A number joke is an ordered sequence of numbers, the progression of which mimics the structure of a joke. For example:

**a natural language joke**  
"When I was a kid my parents moved a lot, but I always found them"  
–Rodney Dangerfield

**a number joke**  
"3, 6, 9, 12, ... -9977, -49942, -149859"  
–This module

It may not look like it but both of these jokes follow a similar structure:

- a **setup** that establishes an **expected rule** through which you're interpreting the joke. followed by...
- a **Punchline** that violates this rule, thereby making you realize that **a different, less obvious, rule** was at play the whole time.

In a natural language joke these rules are symantic or syntactic. In a number joke the rules are mathematical and can often be represented as functions. Take our examples:

**natural language joke**
- setup:  "When I was a kid my parents moved a lot,"  
- the implied rule:  *The word "move" in this joke means something like "changing homes as a family."*  
- punchline:   "but I always found them."  
- the actual rule:   *The word "move" in this joke actually means to literally just move around in space.*

**number joke**
- setup:  "3, 6, 9, 12"  
- the implied rule:  *Joke(n) = 3 + 3n*  
- punchline:  "-9977, -49942, -149859"  
- the actual rule:  *Joke(n) = 3 + 2501n - 4579.667(n \*\* 2) + 2498(n \*\* 3) - 416.333(n \*\* 4)*   
(yes the setup of  "3, 6, 9, 12" does indeed follow this complicated rule )  
  
  
# Why should you care about number jokes?
The short answer is that you shouldn't.  

The long answer is that for millenia psychologists, philosophers, and humorists have been trying to come up with theories of what makes something funny. All these theories have been notoriously hard to prove experimentally. Some of them even seem to be unfalsifiable. 

But now with number jokes we have a way to mathematically model a theory of humor. The theory that number jokes are based on is the [script-based semantic theory of humor](https://en.wikipedia.org/wiki/Theories_of_humor#Script-based_Semantic_Theory_of_Humor). (Victor Raskin: Semantic Mechanisms of Humor, 1985) Creating an abstract mathematical model of a theory is the first step in establishing rigorous scientific proof of the theory. We can use mathematical models to make predictions and test them in real life experiments. As we generate number jokes, control for various parameters, and see which one people find funny - we may be able to establish proof for how humor itself works.
  
  
# This is a joke, right?
Yes.