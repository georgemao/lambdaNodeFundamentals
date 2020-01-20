// Step 1: Level set our understanding of NodeJS sync vs async functions

// This is not async
function notAsync(){
    console.log("Im not async 😛");
    return 0;
}

// The async keyord makes this function async and implicitly return a Promise
async function asyncFn(){
    console.log("I am async!");
    return 1
}


// Invoke both functions
// Neither function depends on one another
notAsync();

asyncFn();

