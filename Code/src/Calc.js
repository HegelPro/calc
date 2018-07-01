function Calc() {
  this.result = 0;
  this.dotOn = false;

  this.nextOperation = {
    func: "start",
    used: false
  }

  this.operationMap = {
    "divide": "/",
    "mult": "*",
    "plus": "+",
    "minus": "-",
    "start": ""
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
    var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( Number(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( Number(n) );

    this.result = (this.mult10(this.result, times) + this.mult10(Number(n), times)) / this.mult10(1, times);
  }

  this.minus = function(n) {
    var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( Number(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( Number(n) );

    this.result = (this.mult10(this.result, times) - this.mult10(Number(n), times)) / this.mult10(1, times);
  }

  this.divide = function(n) {
    var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( Number(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( Number(n) );

    this.result = (this.mult10(this.result, times) / this.mult10(Number(n), times)) / this.mult10(1, times);
  }

  this.mult = function(n) {
    var times = ( this.countNumbersAfterDot(this.result) > this.countNumbersAfterDot( Number(n) )) ? this.countNumbersAfterDot(this.result):this.countNumbersAfterDot( Number(n) );

    this.result = (this.mult10(this.result, times) * this.mult10(Number(n), times)) / this.mult10(1, times);
  }
}

module.exports = new Calc();