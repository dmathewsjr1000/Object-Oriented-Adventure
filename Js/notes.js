class Animal {
    constructor(eyes, legs, isAwake, isMoving) {
        this.eyes = eyes;
        this.legs = legs;
        this.isAwake = isAwake;
        this.isMoving = isMoving;
    }

}

const cat = new Animal(2, 4, true, false);
const dog = new Animal(2, 4, false, false);

console.log(cat);
console.log(dog);



class Human extends Animal {
    constructor(hair, name, language, isAwake, isMoving) {
        super(2, 2, isAwake, isMoving);
        this.hair = hair;
        this.name = name;
        this.language = language; 
    }
}

const me = new Human('black', 'Abe', 'Natural Language', false, false);
console.log(me);


class Developer extends Human {
    // coffeeLevel = 0;
    location = {};
    skills = [];
    constructor(hair, name, isAwake, isMoving, title, salary, team, city, state, ...skills) {
        super(hair, name, 'Natural Language' , isAwake, isMoving);
        this.title = title;
        this.salary = salary;
        this.team = team;
        this.coffeeLevel = 0;
        this.location.city = city;
        this.location.state = state;
        this.skills = skills;
    }
}

const dev1 = new Developer('HotPink', 'Max', false, true, 'Backend Developer', 90000, 'Dev Team', 'NYC', 'New York', 'html', 'js');
console.log(dev1);

class Developer extends Human {
    // coffeeLevel = 0;
    static MAXCOFFEELEVEL = 10;
    location = {};
    skills = [];
    constructor(hair, name, isAwake, isMoving, title, salary, team, city, state, ...skills) {
        super(hair, name, 'Natural Language' , isAwake, isMoving);
        this.title = title;
        this.salary = salary;
        this.team = team;
        this.coffeeLevel = 0;
        this.location.city = city;
        this.location.state = state;
        this.skills = skills;
    }

    drinkCoffee() {
        if (this.coffeeLevel < Developer.MAXCOFFEELEVEL) {
            this.coffeeLevel++;
        }
    }
}
console.log(Developer.MAXCOFFEELEVEL);

const dev1 = new Developer('HotPink', 'Max', false, true, 'Backend Developer', 90000, 'Dev Team', 'NYC', 'New York', 'html', 'js');
dev1.drinkCoffee();
dev1.drinkCoffee();
dev1.sit();
console.log(dev1);