function Calc() {
  this.result = 0;

  this.dotOn = false;
  this.persentOn = false;

  this.nextOperation = {
    func: "start",
    used: false
  }

  this.operationMap = {
    "divide": "/",
    "mult": "*",
    "plus": "+",
    "minus": "-",
    "start": "",
    "pow": "^",
    "sqrtByBase": "√",
    "log": "log"
    // "sqrt": "√",
    // "factorial": '!'
  }

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

  this.countNumbersAfterDot = function(number) {
    var counter = 0;

    while (Math.floor(number).toFixed(10) !== number.toFixed(10)) {
      number *= 10;
      counter++;
    }

    return counter;
  }

  this.mult10 = function(number, times) {
    for(let i = 0; i < times; i++) {
      number *= 10;
    }
    
    return number;
  }

  this.plus = function(n) {
    if(this.persentOn) n = ( this.result * parseFloat(n) / 100).toString();

    // var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( parseFloat(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( parseFloat(n) );
    // this.result = (this.mult10(this.result, times) + this.mult10( parseFloat(n) , times)) / this.mult10(1, times);
    
    this.result = this.result + parseFloat(n);
  }

  this.minus = function(n) {
    if(this.persentOn) n = ( this.result * parseFloat(n) / 100).toString();

    // var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( parseFloat(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( parseFloat(n) );
    // this.result = (this.mult10(this.result, times) - this.mult10(parseFloat(n), times)) / this.mult10(1, times);
  
    this.result = this.result - parseFloat(n);
  }

  this.divide = function(n) {
    if(this.persentOn) {
      this.result = ( this.result / parseFloat(n) * 100).toString()
      
      return
    }
    
    // var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( parseFloat(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( parseFloat(n) );
    // this.result = (this.mult10(this.result, times) / this.mult10(parseFloat(n), times)) / this.mult10(1, times);

    this.result = this.result / parseFloat(n);
  }

  this.mult = function(n) {
    if(this.persentOn) {
      this.result = ( this.result * parseFloat(n) / 100).toString()
      
      return
    }

    // var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( parseFloat(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( parseFloat(n) );
    // this.result = (this.mult10(this.result, times) * this.mult10(parseFloat(n), times)) / this.mult10(1, times);

    this.result = this.result * parseFloat(n);
  }

  this.pow = function(n) {
    this.result = Math.pow(this.result, parseFloat(n))
  }

  this.sqrt = function() {
    this.result = Math.sqrt(this.result)

    console.log(this.result + "  " + Math.sqrt(this.result));
    
  }

  this.sqrtByBase = function(n) {
    this.result = Math.pow(this.result, 1/parseFloat(n))
  }

  this.log = function(n) {
    this.result = Math.log(n) / Math.log(this.result);
  }

  this.factorial = function(n) {
    var z = 1;

    for (let i = 1; i <= n; i++) z = z * i;

    this.result = z; 
  }
}

module.exports = new Calc();