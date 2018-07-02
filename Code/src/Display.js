function Display() {
  this.display = document.querySelector("#display");

  this.value = "0";

  this.deleteValue = function(calc) {
    this.value = "0";

    this.switchDisplay(calc)
  }

  this.getValue = function() {
    return Number(this.value);
  }

  this.switchDisplay = function(calc) {
    this.display.value = calc.operationMap[calc.nextOperation.func] + " " + this.value
  }

  this.addNumberDisplay = function(number, calc) {
    if(calc.nextOperation.used) {
      this.value = number
      calc.nextOperation.used = false
    } else if(this.value === "0") {
      if(number === ".") {
        this.value = "0."
      } else {
        this.value = number
      }
    } else {
      this.value += number
    }

    this.switchDisplay(calc)
  }
}

module.exports = new Display();