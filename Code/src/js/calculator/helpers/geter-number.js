/**
 * @function geterNumber - слущет для создания обьекта с методами для получения числа со сторон какого-то символа
 * @return {Object} - обьект предаставляющий методы для взятия числа
 */
function geterNumber() {
  var number = /[-]?[0-9]*[.]?[0-9]+/,
      numberG = /[-]?[0-9]*[.]?[0-9]+/g

  return {
    getValueRightOperation(strRight) {
      var right = strRight.match(number)[0] || []
        
      return right
    },
    
    getValueLeftOperation(strLeft) {
      var array = strLeft.match(numberG) || []
      var left = array[array.length - 1]
  
      return left
    },
    
    getValuesAroundOperation(strLeft, strRight) {
      return [this.getValueLeftOperation(strLeft), this.getValueRightOperation(strRight)]
    },
    
    getValuesOperationRightRight(strRight) {
      var strRightRight = strRight.slice(strRight.indexOf('\''), strRight.length)
  
      return [this.getValueRightOperation(strRight), this.getValueRightOperation(strRightRight)]
    }
  }
}

export default geterNumber