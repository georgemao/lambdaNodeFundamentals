# lambdaNodeFundamentals
These examples help new NodeJS/AWS Lambda developers understand async vs sync patterns.

Read and test them in order. 

- node example
- node example2
- node example3
- node example3a
- node example4

## Example

This is simple example that shows the differences between an asyc vs non-async function


## Example2

This example implements our functions from the previous example and demostrates how to call an async function from non-async code

## Example3

This example further builds on example2. It demostrates how to communicate between async and non-async code using two solutions
- .then syntax
- async/await

## Example3a

This example demostrates how you can pass data between async code and non-async code. We look at the improved .then syntax vs "callback hell" from pre Node8. We review how to write the same .then code using async/await.

## Example4

This is the final example. We move everythin to async/await syntax, but what if our code does no depend each other? This example demostrates how to improve async perfomrance.
