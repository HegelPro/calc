class Calc {
  constructor() {
    this.result = 0;  // изначальное значение

    this.dotOn = false; // мод включеной точки
    this.persentOn = false; // мод операкии с процентом

    this.nextOperation = {
      func: "start",  // изначально нет никакой операции
      used: false
    }

    // Соотносит название операции со значком. Нужно для вывода
    this.operationMap = {
      "divide": "/",
      "mult": "*",
      "plus": "+",
      "minus": "-",
      "start": "",
      "pow": "^",
      "sqrtByBase": "√",
      "log": "log"
    }
  }

  // Нужна для запоменания следующей операции калькулятора
  switchNextOperation(operation) {
    if(operation === "start") {
      this.nextOperation = {
        func: operation,
        used: false
      }
    } else {
      this.nextOperation = {
        func: operation,
        used: true
      }
    }
  }

// Все операции калькулятора. Есть некоторые операции работающие в режиме процента. После операции выполняется value.toFixed(10) 
  inversion() {
    this.result = -this.result
  }

  plus(n) {
    if(this.persentOn) n = ( this.result * parseFloat(n) / 100).toString();
   
    this.result = this.result + parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  minus(n) {
    if(this.persentOn) n = ( this.result * parseFloat(n) / 100).toString();

    this.result = this.result - parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  divide(n) {
    if(this.persentOn) {
      this.result = ( this.result / parseFloat(n) * 100).toString()
      return
    }
    
    this.result = this.result / parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  mult(n) {
    if(this.persentOn) {
      this.result = ( this.result * parseFloat(n) / 100).toString()
      
      return
    }

    this.result = this.result * parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  pow(n) {
    this.result = Math.pow(this.result, parseFloat(n))
    this.result = +this.result.toFixed(10)
  }

  sqrt() {
    this.result = Math.sqrt(this.result)
    this.result = +this.result.toFixed(10)
  }

  sqrtByBase(n) {
    this.result = Math.pow(this.result, 1/parseFloat(n))
    this.result = +this.result.toFixed(10)
  }

  log(n) {
    this.result = Math.log(this.result) / Math.log(n);
    this.result = +this.result.toFixed(10)
  }

  factorial(n) {
    var z = 1;

    for (let i = 1; i <= n; i++) z = z * i;

    this.result = z; 
    this.result = +this.result.toFixed(10)
  }
}

module.exports = Calc;