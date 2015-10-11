function test(){
    const test = 30;
    test = 12; // syntaxerror FF, ignored Chrome
    console.log(test);
}

test();