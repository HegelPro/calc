import Operations from "../helpers/operations"
import decorator from "./decorator"
import GeterNumber from "../helpers/geter-number"

const geterNumber = GeterNumber()
const operations = new Operations

/**
 * @class SyntaxAnalisator - аналезирует пример в виде строки. Разбивает его на операции и операнды. Выполняет вычисление
 */
class SyntaxAnalisator {
  constructor() {}

  /**
   * @method rewrite - переписывает пример в удобный для анализирования
   * @param {String} str - пример для анализа
   * @return {String} str - удобный для анализа пример
   */
  rewrite(str) {
    var lowerToUpper = {
      '₀': '0',
      '₁': '1',
      '₂': '2',
      '₃': '3', 
      '₄': '4', 
      '₅': '5', 
      '₆': '6', 
      '₇': '7', 
      '₈': '8', 
      '₉': '9'
    }
    

    for (let index = 0; index < str.length; index++) {  // преобразует привычную для глаза строку, в удобрую для обработки строку
      if( str[index] === '-' && str[index + 1] === '-' ) str = str.replace('--', '+')
      if( str[index] === '-' && /[0-9]/.test(str[index - 1]) ) str = str.replace('-', '+-')
      if( /[₀-₉]/.test(str[index]) ) str = str.replace( str[index], lowerToUpper[ str[index]] + '\'' )
    }

    return str    
  }

  /*getValueRightOperation(strRight) {
    var right = strRight.match(/[-]?[0-9]*[.]?[0-9]+/)[0] || []
      
    return right
  }
  
  getValueLeftOperation(strLeft) {
    var array = strLeft.match(/[-]?[0-9]*[.]?[0-9]+/g) || []
    var left = array[array.length - 1]

    return left
  }
  
  getValuesAroundOperation(strLeft, strRight) {
    return [this.getValueLeftOperation(strLeft), this.getValueRightOperation(strRight)]
  }
  
  getValuesOperationRightRight(strRight) {
    var strRightRight = strRight.slice(strRight.indexOf('\''), strRight.length)

    return [this.getValueRightOperation(strRight), this.getValueRightOperation(strRightRight)]
  }*/

  analysSyntaxLevelOne(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "+" || str[charIndex] === "-") {
        let [left, right] = geterNumber.getValuesAroundOperation(str.slice(0, charIndex), str.slice(charIndex + 1, str.length));
        
        // str = str.replace(left + str[charIndex] + right, operations[ operations.antiOperationMap[str[charIndex]]](left, right) );

        str = str.replace(left + str[charIndex] + right, decorator( this, operations[ operations.antiOperationMap[str[charIndex]]],str[charIndex], left, right ) );

        str = this.analysSyntaxLevelOne(str)
      }
    }
  
    return str
  }
  
  analysSyntaxLevelTwo(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "*" || str[charIndex] === "/" ) {
        let [left, right] = geterNumber.getValuesAroundOperation(str.slice(0, charIndex), str.slice(charIndex + 1, str.length));
        
        str = str.replace(left + str[charIndex] + right, decorator( this, operations[ operations.antiOperationMap[str[charIndex]]],str[charIndex], left, right ) );
      }
    }
  
    return str
  }
  
  analysSyntaxLevelThree(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "^" || ( str[charIndex] === "√" && str[charIndex-1] !== undefined && RegExp(str[charIndex-1]).test(/[0-9]/))) {
        let [left, right] = geterNumber.getValuesAroundOperation(str.slice(0, charIndex), str.slice(charIndex + 1, str.length));
        
        str = str.replace(left + str[charIndex] + right, operations[ operations.antiOperationMap[str[charIndex]]](left, right) );
      }
    }
  
    return str
  }
  
  analysSyntaxLevelFour(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "%") {
        let left = geterNumber.getValueLeftOperation(str.slice(0, charIndex));
        let operLefterValue = charIndex - left.length - 1
        let valueBeforeValueWithPrecent = geterNumber.getValueLeftOperation(str.slice(0, operLefterValue))

        str = str.replace(left + str[charIndex], (+valueBeforeValueWithPrecent / 100 * left).toString() )
      }
    }
  
    return str
  }
  
  analysSyntaxLevelFive(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "!" || str[charIndex] === "√" || str[charIndex] === "l") {  // without logNum1(num2)
        if(str[charIndex] === "l" ) {
          let [right, rightRight] = geterNumber.getValuesOperationRightRight(str.slice(charIndex + 1, str.length));

          // console.log(str.slice('log' + right + '\'' + rightRight)); // TODO i should to add indexOf
          str = str.replace( str.slice('log' + right + '\'' + rightRight), operations.log(right, rightRight) )
          // console.log(str); 

          return str
        }
        let right = geterNumber.getValueRightOperation(str.slice(charIndex + 1, str.length));
        
        if(str[charIndex] === "√") str = str.replace(str[charIndex] + right, operations.sqrt(right) )
        else str = str.replace(str[charIndex] + right, operations[ operations.antiOperationMap[str[charIndex]]](right) )
      }
    }
  
    return str
  }
  
  analysSyntaxLevelSix(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (/\(/.test(str) && /\)/.test(str) && str[charIndex] === "(") {
        str = str.replace( str.slice(charIndex, str.indexOf(")") + 1), this.analysSyntax( str.slice(charIndex + 1, str.indexOf(")") )) )
      }
    }
  
    return str
  }

  /**
   * @method analysSyntax - выполняет решение примера. Есть несколько приоретерных операций от level6 до level1. Таким образом реализуя приоритет операций
   * 1level - '-', '+'
   * 2level - '*', '/'
   * 3level - '(num)√(num)', '^'
   * 4level - '%'
   * 5level - 'log', '√(num)', '!'
   * 6level - '()'
   * @param {String} str - пример, который надо решить 
   * @return {Number} - значение решеного примера
   */
  analysSyntax(str) {
    str = this.rewrite(str)

    return this.analysSyntaxLevelOne( this.analysSyntaxLevelTwo( this.analysSyntaxLevelThree( this.analysSyntaxLevelFour( this.analysSyntaxLevelFive( this.analysSyntaxLevelSix(str) )))))
  }
}

export default SyntaxAnalisator

