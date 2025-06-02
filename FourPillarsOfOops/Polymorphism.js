
//ability of objects to take multiple forms

//two types-

//1. dynamic/ runtime polymorphism- achieved via method overriding

class Animal {
    printAnimal() {
        console.log("I am from the Animal class")
    }
    printAnimalTwo() {
        console.log("I am from the Animal class")
    }
}

class Lion extends Animal {
    printAnimal(){  // method overriding
        console.log("I am from the Lion class")
    }
}

const animal = new Lion
animal.printAnimal()
animal.printAnimalTwo()

//compile time polymorphism - achieved via method overloading

class Area {
    calculateArea(length, breadth = -1) {
        if (breadth != -1)
            return length * breadth;
        else 
            return length * length;
    }
    
}


let area = new Area;
console.log('Area of rectangle = ' + area.calculateArea(3, 4));
console.log('Area of square = ' + area.calculateArea(6));