function oldDefault(a, b){
    a = a === undefined ? 1 : a;
    b = b || 2;
    console.log(a);
    console.log(b);
}

oldDefault();

function newDefault(a = 1, b = 2){
 console.log(a);
    console.log(b);
}

newDefault();