
class Calculator {
  constructor() {
    this.result = 0;  // изначальное значение

    this.dotOn = false; // мод включеной точки
    this.persentOn = false; // мод операкии с процентом

    this.nextOperation = {
      func: "start",  // изначально нет никакой операции
      used: false
    }
  }
  
  // Нужна для запоменания следующей операции калькулятора
/*  switchNextOperation(operation) {
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
  } */
}

module.exports = Calculator;