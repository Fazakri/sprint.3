class Animal {
    constructor(name, age , isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal {
    constructor(name, age, isMammal){
        super(name, age, isMammal)
        this.isMammal = isMammal = true
    }
    eat (){
        return `${this.name} sedang makan`
    }   
}

class Eagle extends Animal {
    constructor (name, age, isMammal){
        super(name, age, isMammal)
        this.isMammal = false
    }
    fly (){
        return `${this.name} sedang terbang`
    }
}

let myRabbit = new Rabbit ('Labi', 2, true)
console.log(myRabbit);

let myEagle = new Eagle ('Elo', 4, false)
console.log(myEagle);

