function receivesAFunction(callback){
    return callback();
}



function returnsANamedFunction(){
    const combineStrings = function (name1, name2){
        return name1 + name2;
    };
    return combineStrings;
}


function returnsAnAnonymousFunction(){
    return function (name1, name2){
        return name1 + name2;
    };
}