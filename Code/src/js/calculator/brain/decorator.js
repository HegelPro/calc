/**
 * @function decorator - функция оборачивающая func()
 * @param {Object} context 
 * @param {Function} func - функция которая будет опебнута дополнительными методами
 * @param {String} left - левая часть для операции
 * @param {String} right - правая часть от операции
 * @return {number} - число полученая в результате выполнения операции
 */
function decorator (context, func, char, left, right) {
  console.log("Выполняется операция " + char + " с параметрами " + left + " и " + right);

  return function() {
    var result = func.call(context, left, right);

    console.log("Результат операции: " + result);

    return +result.toFixed(10)
  }
}

export default decorator