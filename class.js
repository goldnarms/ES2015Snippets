class Person{
    constructor(firstName = "James", lastName = "Jenkins"){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    static printName(person){
        console.log(person.firstName + " " + person.lastName);
    }
}

let person = new Person();
console.log(person.name); // Jimmy

class Gamer extends Person{
 constructor(fistName, lastName, gameOfChoice){
     super(firstName, lastName);
     this.gameOfChoice = gameOfChoice;
 }   
}

let gamer = new Gamer("Leeroy", , "WOW");
Person.printName(gamer);

// Functions hoisted, classes are not