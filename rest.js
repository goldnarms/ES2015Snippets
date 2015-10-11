function oldRestFunction(a, b){
 console.log(a);
    var result = Array.prototype.slice.call(arguments, oldRestFunction.length);
    document.getElementById("resultOld").innerHTML = result;
}

function newRestFunction(a, ...b){
    document.getElementById("resultNew").innerHTML = b;
}

oldRestFunction("a", "b", "c", "d", "e");