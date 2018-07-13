// инпут калькулятора
class Display {
  constructor(elementCalc) {
    this.display = elementCalc.querySelector(".display");

    this.value = "0";
  }

  deleteValue(calc) {
    this.value = "0";

    calc.dotOn = false

    this.switchDisplay(calc)
  }

  getValue() {
    return parseFloat(this.value);
  }

// меняет значение инпута дисплей
  switchDisplay(calc) {
    this.display.value = calc.operationMap[calc.nextOperation.func] + " " + this.value;
  }

  inversion(calc) {
    this.value = -this.value

    this.switchDisplay(calc)
  }

// добавление значения в инпут
  addNumberDisplay(number, calc) {
    if(calc.nextOperation.used) {
      this.value = number
      calc.nextOperation.used = false
    } else if (this.value === "0" && number === ".") {
      this.value = "0."
    } else if (this.value === "0") {
      this.value = number
    } else {
      this.value += number
    }

    this.switchDisplay(calc)
  }
}

module.exports = Display;