// This is how to enable async/non-async communication
// Two solutions: .then syntax or async/awaits

async function notAsync(){
    console.time('timer')

    console.log("Im not async");

    var someInfo=asyncFn()
    someInfo.then(response => {
        console.log(response);
    
        if(response == 1){
            console.log ("IT  WORKS 😛");
            console.timeEnd('timer');
        }
    });
    
    /*
    var someInfo = await asyncFn();
    if(someInfo == 1)
        console.log ("IT ALSO WORKS! 😛 😛 😛 😛");
    */
    
    
    return 0;
}

// Implicity return a promise
async function asyncFn(){

    return 1;
}


 notAsync();

 //asyncFn();


function random(low, high) {
    return Math.random() * (high - low) + low
}