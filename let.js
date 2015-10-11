"use strict"; // must use
function varFunction(){
    if(true){
        var a = 3;
    }
    console.log("From function: " + a);
    var a = 5;
    console.log("From function, redeclared: " + a);
}

varFunction();
console.log("Outside function: " + a);

function letFunction(){
    if(true){
        let b = 4;
    }
    console.log("From function: " + b);
    let c = 1;
    console.log("C: " + c);
    let c = 2;
    console.log("C: " + c);
}

letFunction();
