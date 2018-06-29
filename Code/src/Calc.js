function Calc() {
  this.display = 0;

  this.plus = function(n) {
    this.result += n;
  }

  this.minus = function(n) {
    this.result -= n;
  }

  this.divide = function(n) {
    this.result /= n;
  }

  this.mult = function(n) {
    this.result *= n;
  }
}

module.exports = new Calc();