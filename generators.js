let array = [1, 2, 3];
for(let value of array){
    console.log(value);
}
// 1, 2, 3

function *generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

for(let value of generatorFunction()){
 console.log(value);   
}

// 1, 2, 3