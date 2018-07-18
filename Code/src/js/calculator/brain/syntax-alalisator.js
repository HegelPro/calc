const Operations = require("./operations")

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
  
  
  static analysSyntaxLevelOne(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "+" ) {
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
      if (str[charIndex] === "!" || str[charIndex] === "√" ) {  // without logNum1(num2)
        let right = this.getValueRightOperation(str.slice(charIndex + 1, str.length));
        
        if(str[charIndex] === "√") str = str.replace(str[charIndex] + right, Operations.sqrt(right) )
        else str = str.replace(str[charIndex] + right, Operations[ Operations.antiOperationMap[str[charIndex]]](right) )
      }
    }
  
    return str
  }
  
  static analysSyntaxLevelSix(str) {
    for(let charIndex = 0; charIndex < str.length; charIndex++) {
      if (str[charIndex] === "(") {
        str = str.replace( str.slice(charIndex, str.indexOf(")") + 1), this.analysSyntax( str.slice(charIndex + 1, str.indexOf(")") )) )
      }
    }
  
    return str
  }
  
  
  static analysSyntax(str) {
    return this.analysSyntaxLevelOne( this.analysSyntaxLevelTwo( this.analysSyntaxLevelThree( this.analysSyntaxLevelFour( this.analysSyntaxLevelFive( this.analysSyntaxLevelSix(str) )))))
  }
  
  // var str = ""
  
  // console.log( analysSyntax(str) );

}


module.exports = SyntaxAlalisator

