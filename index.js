function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function myFunction() {
        console.log('hi');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('who am i?');
    }
}