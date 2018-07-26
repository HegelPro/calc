/**
 * Выполняет операции
 * 
 * @class Operations
 * @namespace Operations
 */
class Operations {
  /**
   * Для преобразования знака в название операции
   * 
   * @memberof Operations
   * @method operationMap
   * @static
   * @return {Object}
   */
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

  /**
   * Для преобразования название операции в знака
   * 
   * @memberof Operations
   * @method antiOperationMap
   * @static
   * @return {Object}
   */
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

  /**
   * @memberof Operations
   * @method plus
   * @static
   * @return {Number}
   */
  static plus(right, left) {
    if(this.persentOn) left = ( right * parseFloat(left) / 100).toString();
  
    right = parseFloat(right) + parseFloat(left);
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method minus
   * @static
   * @return {Number}
   */
  static minus(left) {
    if(this.persentOn) left = ( right * parseFloat(left) / 100).toString();

    right = right - parseFloat(left);
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method divide
   * @static
   * @return {Number}
   */
  static divide(right, left) {
    if(this.persentOn) {
      right = ( right / parseFloat(left) * 100).toString()
      return
    }
    
    right = right / parseFloat(left);
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method mult
   * @static
   * @return {Number}
   */
  static mult(right, left) {
    if(this.persentOn) {
      right = ( right * parseFloat(left) / 100).toString()
      return
    }

    right = parseFloat(right) * parseFloat(left);
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method pow
   * @static
   * @return {Number}
   */
  static pow(right, left) {
    right = Math.pow(parseFloat(right), parseFloat(left))
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method sqrt
   * @static
   * @return {Number}
   */
  static sqrt(right) {
    right = Math.sqrt(right)
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method sqrtByBase
   * @static
   * @return {Number}
   */
  static sqrtByBase(right, left) {
    right = Math.pow(parseFloat(left), 1/parseFloat(right))
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method log
   * @static
   * @return {Number}
   */
  static log(right, rightRight) {
    rightRight = Math.log(rightRight) / Math.log(right);
    return +rightRight.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method factorial
   * @static
   * @return {Number}
   */
  static factorial(right) {
    var result = 1;

    for (let i = 1; i <= right; i++) result *= i;

    return +result.toFixed(10)
  }
}

module.exports = Operations;