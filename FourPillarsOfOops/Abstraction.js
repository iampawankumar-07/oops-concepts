
//Show only neccessary information or details and abstracts the internal workings

class Calculator {

    constructor(val1, val2) {
        this.value1 = val1
        this.value2 = val2
    }


    add() {
        let result = this.value1 + this.value2
        return result
    }

}



let calculator = new Calculator(1, 2)
calculator.add()

//here the internal workings or exact implementation of the add function is abstracted within the class
