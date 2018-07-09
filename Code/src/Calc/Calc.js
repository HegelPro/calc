function Calc() {
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

// Нужна для запоменания следующей операции калькулятора
  this.switchNextOperation = function(operation) {
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
  this.plus = function(n) {
    if(this.persentOn) n = ( this.result * parseFloat(n) / 100).toString();
   
    this.result = this.result + parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  this.minus = function(n) {
    if(this.persentOn) n = ( this.result * parseFloat(n) / 100).toString();

    this.result = this.result - parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  this.divide = function(n) {
    if(this.persentOn) {
      this.result = ( this.result / parseFloat(n) * 100).toString()
      return
    }
    
    this.result = this.result / parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  this.mult = function(n) {
    if(this.persentOn) {
      this.result = ( this.result * parseFloat(n) / 100).toString()
      
      return
    }

    this.result = this.result * parseFloat(n);
    this.result = +this.result.toFixed(10)
  }

  this.pow = function(n) {
    this.result = Math.pow(this.result, parseFloat(n))
    this.result = +this.result.toFixed(10)
  }

  this.sqrt = function() {
    this.result = Math.sqrt(this.result)
    this.result = +this.result.toFixed(10)
  }

  this.sqrtByBase = function(n) {
    this.result = Math.pow(this.result, 1/parseFloat(n))
    this.result = +this.result.toFixed(10)
  }

  this.log = function(n) {
    this.result = Math.log(this.result) / Math.log(n);
    this.result = +this.result.toFixed(10)
  }

  this.factorial = function(n) {
    var z = 1;

    for (let i = 1; i <= n; i++) z = z * i;

    this.result = z; 
    this.result = +this.result.toFixed(10)
  }
}

module.exports = Calc;