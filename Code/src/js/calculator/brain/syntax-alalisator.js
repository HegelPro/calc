import Operations from "./operations"

// this.operationHeavy = {
//   "+": 1,
//   "*": 2,
//   "/": 2,
//   "^": 3,
//   "√": 3,
//   "%": 4,
//   "log": 5,
//   "!": 5,
//   "(": 6,
//   ")": 6
// }

class SyntaxAlalisator {
  constructor() {}

  static rewrite(str) {
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
    

    for (let index = 0; index < str.length; index++) {
      if( str[index] === '-' && str[index + 1] === '-' ) str = str.replace('--', '+')
      if( str[index] === '-' && /[0-9]/.test(str[index - 1]) ) str = str.replace('-', '+-')
      if( /[₀-₉]/.test(str[index]) ) str = str.replace( str[index], lowerToUpper[ str[index]] + '\'' )
    }

    return str    
  }

  static getValueRightOperation(strRight) {
    var right = strRight.match(/[-]?[0-9]*[.]?[0-9]+/)[0]
  
    return right
  }
  
  static getValueLeftOperation(strLeft) {
    var array = strLeft.match(/[-]?[0-9]*[.]?[0-9]+/g)
    var left = array[array.length - 1]
  
    return left
  }
  
  static getValuesAroundOperation(strLeft, strRight) {
    return [this.getValueLeftOperation(strLeft), this.getValueRightOperation(strRight)]
  }
  
  static getValuesOperationRightRight(strRight) {
    var strRightRight = strRight.slice(strRight.indexOf('\''), strRight.length)

    return [this.getValueRightOperation(strRight), this.getValueRightOperation(strRightRight)]
  }

  static analysSyntaxLevelOne(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "+") {
        let [left, right] = this.getValuesAroundOperation(str.slice(0, charIndex), str.slice(charIndex + 1, str.length));
        
        str = str.replace(left + str[charIndex] + right, Operations[ Operations.antiOperationMap[str[charIndex]]](left, right) );
      }
    }
  
    return str
  }
  
  static analysSyntaxLevelTwo(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "*" || str[charIndex] === "/" ) {
        let [left, right] = this.getValuesAroundOperation(str.slice(0, charIndex), str.slice(charIndex + 1, str.length));
        
        str = str.replace(left + str[charIndex] + right, Operations[ Operations.antiOperationMap[str[charIndex]]](left, right) );
      }
    }
  
    return str
  }
  
  static analysSyntaxLevelThree(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "^" || ( str[charIndex] === "√" && str[charIndex-1] !== undefined && RegExp(str[charIndex-1]).test(/[0-9]/))) {
        let [left, right] = this.getValuesAroundOperation(str.slice(0, charIndex), str.slice(charIndex + 1, str.length));
        
        str = str.replace(left + str[charIndex] + right, Operations[ Operations.antiOperationMap[str[charIndex]]](left, right) );
      }
    }
  
    return str
  }
  
  static analysSyntaxLevelFour(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "%") {
        let left = this.getValueLeftOperation(str.slice(0, charIndex));
        
        // TODO
        // str = str.replace(left + str[charIndex], Operations[ ... ] )
      }
    }
  
    return str
  }
  
  static analysSyntaxLevelFive(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "!" || str[charIndex] === "√" || str[charIndex] === "l") {  // without logNum1(num2)
        if(str[charIndex] === "l" ) {
          let [right, rightRight] = this.getValuesOperationRightRight(str.slice(charIndex + 1, str.length));

          console.log(str.slice('log' + right + '\'' + rightRight)); // TODO i should to add indexOf
          str = str.replace( str.slice('log' + right + '\'' + rightRight), Operations.log(right, rightRight) )
          console.log(str); 

          return str
        }
        let right = this.getValueRightOperation(str.slice(charIndex + 1, str.length));
        
        if(str[charIndex] === "√") str = str.replace(str[charIndex] + right, Operations.sqrt(right) )
        else str = str.replace(str[charIndex] + right, Operations[ Operations.antiOperationMap[str[charIndex]]](right) )
      }
    }
  
    return str
  }
  
  static analysSyntaxLevelSix(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (/\(/.test(str) && /\)/.test(str) && str[charIndex] === "(") {
        str = str.replace( str.slice(charIndex, str.indexOf(")") + 1), this.analysSyntax( str.slice(charIndex + 1, str.indexOf(")") )) )
      }
    }
  
    return str
  }
  
  static analysSyntax(str) {
    str = this.rewrite(str)

    return this.analysSyntaxLevelOne( this.analysSyntaxLevelTwo( this.analysSyntaxLevelThree( this.analysSyntaxLevelFour( this.analysSyntaxLevelFive( this.analysSyntaxLevelSix(str) )))))
  }
}


export default SyntaxAlalisator

