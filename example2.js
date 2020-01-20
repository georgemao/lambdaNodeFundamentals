// Now lets use the same Same functions with some code in them
// We need to call the async fn from a non async function

 function notAsync(){
    console.time('timer')

    console.log("Im not async");
   
    // Call an Async Function
    var someInfo = asyncFn();
    console.log("This is a promise 🤞 ... ")
    console.log(someInfo);

    if(someInfo == 1)
        console.log("It worked 😛 😛")
    else
        console.log("It didnt work 😭  😭   ")

    console.timeEnd('timer')
}

// Async functions return a Promise
// Promises represent the eventual completion of an Async operation + its value
// We can implicitly return the Promise with Async keyword, or control our own Promise like so
async function asyncFn(){
    return new Promise((resolve, reject) => {
        // Pretend we are hitting an API that takes time
        setTimeout(() => {
            console.log("I AM ASYNC!");
            resolve (1);    // RETURN hard coded 1
        }, random(0,3000));
    })
}


 notAsync();




 function random(low, high) {
    return Math.random() * (high - low) + low
}