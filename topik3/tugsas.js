class Animal {
    constructor(name = '', age = 0, isMammal = true) {
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
        this.isMammal = true
    }
    fly (){
        return `${this.name} sedang terbang`
    }
}

let myRabbit = new Rabbit ('Labi', 2)
console.log(myRabbit.eat());

let myEagle = new Eagle ('Elo', 4)
console.log(myEagle.fly());

