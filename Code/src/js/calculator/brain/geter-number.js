class GeterNumber {
  static getValueRightOperation(strRight) {
    var right = strRight.match(/[-]?[0-9]*[.]?[0-9]+/)[0]
      
    return right
  }
  
  static getValueLeftOperation(strLeft) {
    var array = strLeft.match(/[-]?[0-9]*[.]?[0-9]+/g)
    var left = array[array.length - 1]

    return left
  }
}