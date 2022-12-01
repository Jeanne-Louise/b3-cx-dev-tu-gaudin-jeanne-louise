//scientific calculator


class Calculator {
    
  constructor(num1, num2) {
        this.num1 = num1;
           this.num2 = num2;
    }
    
    getAddition () {
      return this.num1 + this.num2
    }
    
    getSubstraction () {
      return this.num1 - this.num2
    }
    
    getMultiplication() {
      return this.num1 * this.num2;
    }
    
    getDivision() {
      return this.num1 / this.num2;
    }

    getCalcHypotenuse() {
      return Math.sqrt(this.num1);
    }

    getPow() {
      return Math.pow(this.num1, this.num2);
    }
}



module.exports = {
  Calculator:Calculator,
}



