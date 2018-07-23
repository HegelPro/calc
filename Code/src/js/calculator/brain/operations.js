class Operations {
  
  constructor() {
    
    // Соотносит название операции со значком. Нужно для вывода
    // this.operationMap = 

    // this.antiOperationMap = 
  }

  static get operationMap() {
    return {
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

  static get antiOperationMap() {
    return {
      "/": "divide",
      "*": "mult",
      "+": "plus",
      "-": "minus",
      "": "start",
      "^": "pow",
      "√": "sqrtByBase",
      "log": "log",
      "!": "factorial"
    }
  }

  // Все операции калькулятора. Есть некоторые операции работающие в режиме процента. После операции выполняется value.toFixed(10) 
  static inversion() {
    return -right
  }

  static plus(right, left) {
    if(this.persentOn) left = ( right * parseFloat(left) / 100).toString();
  
    right = parseFloat(right) + parseFloat(left);
    return +right
  }

  static minus(left) {
    if(this.persentOn) left = ( right * parseFloat(left) / 100).toString();

    right = right - parseFloat(left);
    return +right.toFixed(10)
  }

  static divide(right, left) {
    if(this.persentOn) {
      right = ( right / parseFloat(left) * 100).toString()
      return
    }
    
    right = right / parseFloat(left);
    return +right.toFixed(10)
  }

  static mult(right, left) {
    if(this.persentOn) {
      right = ( right * parseFloat(left) / 100).toString()
      return
    }

    right = parseFloat(right) * parseFloat(left);
    return +right.toFixed(10)
  }

  static pow(right, left) {
    right = Math.pow(parseFloat(right), parseFloat(left))
    return +right.toFixed(10)
  }

  static sqrt(right) {
    right = Math.sqrt(right)
    return +right.toFixed(10)
  }

  static sqrtByBase(right, left) {
    right = Math.pow(parseFloat(left), 1/parseFloat(right))
    return +right.toFixed(10)
  }

  static log(right, rightRight) {
    rightRight = Math.log(rightRight) / Math.log(right);
    return +rightRight.toFixed(10)
  }

  static factorial(right) {
    var result = 1;

    for (let i = 1; i <= right; i++) result *= i;

    return +result.toFixed(10)
  }
}

module.exports = Operations;