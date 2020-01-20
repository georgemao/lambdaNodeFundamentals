// How do you pass the results of one async function to another?
// Callbacks pre Node8 ==> Callback HELL

async function notAsync(){
    console.time('timer')

    console.log("Im not async");

    var someInfo=asyncFn()
    
    // Begin AND THEN???
    //https://youtu.be/oqwzuiSy9y0?t=60
    //https://imgur.com/gallery/ciayxXT
    someInfo.then(response => {
        console.log(`Promise chain begins ... with value ${response}`);

        if(response == 1)
            console.log ("IT EQUALS ONE");

        return response
    })
    .then(response => {
        console.log(`Promise chain ... passing ${response} to the next function`)

        return doubleItAsync(response)
    })
    .then(response => {
        console.log(`Promise chain CONTINUES. Recieved doubled value ${response}`)

        console.log(`One more change. Add some smilies '${response} 😛  😛  '`);
    });
   

    // You can write this in a simpler syntax with async/waits
    /*
    var someInfo = await asyncFn();
    var total =  await doubleItAsync(someInfo);
    console.log(`One more change. Add some smilies:  ${total} 😛 😛`);
    */
   
    console.timeEnd('timer')
    return 0;
}


async function asyncFn(){
    
    console.log("I AM ASYNC!");

    return 1;
}

async function doubleItAsync(input){
    
    console.log(`I AM ASYNC! Multiplying ${input} by 2 ...`);
    return 2*input;
}

 notAsync();
 //asyncFn();