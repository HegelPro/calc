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
  get operationMap() {
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
  get antiOperationMap() {
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
  plus(right, left) {
    if(this.persentOn) left = ( right * parseFloat(left) / 100).toString();
  
    right = parseFloat(right) + parseFloat(left);
    return right
  }

  /**
   * @memberof Operations
   * @method minus
   * @static
   * @return {Number}
   */
  minus(left) {
    if(this.persentOn) left = ( right * parseFloat(left) / 100).toString();

    right = right - parseFloat(left);
    return right
  }

  /**
   * @memberof Operations
   * @method divide
   * @static
   * @return {Number}
   */
  divide(right, left) {
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
  mult(right, left) {
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
  pow(right, left) {
    right = Math.pow(parseFloat(right), parseFloat(left))
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method sqrt
   * @static
   * @return {Number}
   */
  sqrt(right) {
    right = Math.sqrt(right)
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method sqrtByBase
   * @static
   * @return {Number}
   */
  sqrtByBase(right, left) {
    right = Math.pow(parseFloat(left), 1/parseFloat(right))
    return +right.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method log
   * @static
   * @return {Number}
   */
  log(right, rightRight) {
    rightRight = Math.log(rightRight) / Math.log(right);
    return +rightRight.toFixed(10)
  }

  /**
   * @memberof Operations
   * @method factorial
   * @static
   * @return {Number}
   */
  factorial(right) {
    var result = 1;

    for (let i = 1; i <= right; i++) result *= i;

    return +result.toFixed(10)
  }
}

module.exports = Operations;