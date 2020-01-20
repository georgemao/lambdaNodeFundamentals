// Final example. Move everything to async/await.
// Improve performance if your async code does not actually need to interact with each other

async function async(){
    
    var one =   asyncFn();
    console.log(one)
    var two =    asyncFn2();
    console.log(two)

    //return [one, two]

    // What if your code does not depend on each other?
    // Built in Await for all promises to complete
    const final = Promise.race([one, two])
    return  final
}


async function asyncFn(){
    const promise = new Promise(function(resolve, reject) {
        //Simulate an API call takes 5 seconds
        setTimeout(resolve, 5000, 1);
        
    })

    return promise
}

async function asyncFn2(){
    const promise = new Promise(function(resolve, reject) {
        // Another API call of 5 seconds
        setTimeout(resolve, 5000, 2);
        
    })

    return promise
}

console.time('timer')

async().then ( response => {
    console.log(`The final result is ${response} 😛 😛`)
    console.timeEnd('timer');
})


