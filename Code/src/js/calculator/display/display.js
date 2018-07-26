/**
 * Дисплей калькулятора
 * 
 * @class Display
 * @namespace Display
 */
class Display {
  /**
   * Конструктор калькуятора
   * 
   * @param {Dom-element} elementCalc 
   */
  constructor(elementCalc) {
    /**
     * Находим ноду с дисплеем
     * 
     * @public
     */
    this.element = elementCalc.querySelector(".display")

    /**
     * Состояние в котором пишем на дисплее нижним регистром
     */
    this.toWriteInLowerCase = false

    /**
     * Для преобразования числа в число с нижним регистром
     * 
     * @public
     */
    this.upperToLower = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉']
  }

  /**
   * Устанавливает значеник дисплея
   * 
   * @memberof Display
   * @method set value
   */
  set value(value) {
    this.element.value = value
  }

  /**
   * Берет значеник дисплея
   * 
   * @memberof Display
   * @method get value
   */
  get value() {
    return this.element.value
  }

  /**
   * 
   */
  // setDefouldState() {
  //   this.toWriteInLowerCase = false
  // }

  /**
   * @method inverseLostNumber - Берет последнее число и инвертирует его
   * @memberof Display
   */
  inverseLostNumber() {
    // берем последнее число
    var array = this.value.match(/[-]?[0-9]*[.]?[0-9]+/g) 
    var lostValue = array[array.length - 1]

    // инвертируем число
    var inversedLostValue = -lostValue

    // меняем местами последнее число на новое инвертированное
    this.value = this.value.replace(lostValue, inversedLostValue.toString())
  }

  /**
   * @method addSymbel - добавляет символ в дисплей
   * @memberof Display
   * @param {Number} value 
   */
  addSymbel(value) {
    if( this.element.value === '0' ) {
      this.value = value
    } else if( value === 'log' ) {
      // берем последнее число
      var array = this.value.match(/[-]?[0-9]*[.]?[0-9]+/g)
      var lostValue = array[array.length - 1]

      // включаем если у нас нажата кнопка log пишем в нижнем регистре
      this.toWriteInLowerCase = true

      // преобразует последнее число в вид логарифма
      this.value = this.value.replace(this.value.slice(this.value.lastIndexOf(lostValue), this.value.length), 'log(' + lostValue + ')')
    } else if( this.toWriteInLowerCase ) {
      // для лагорифма 
      if (!/[0-9]/.test(value)) { 
        this.toWriteInLowerCase = false

        this.value += value
      } else {
        var array = this.value.match(/[-]?[0-9]*[.]?[0-9]+/g)
        var lostValue = array[array.length - 1]
  
        this.value = this.value.slice( 0, this.value.lastIndexOf('log') + 3) + this.upperToLower[value] + '(' + lostValue + ')' //!!!
      }
 
    } else {
      this.value += value
    }
  }

  /**
   * @method deleteSymbel - Удаляет последний символ
   * @memberof Display
   */
  deleteSymbel() {
    if(this.value.length <= 1) this.value = 0
    else this.value = this.value.slice(0, this.value.length-1)
  }

  /**
   * @method resetDisplay - Отчищает значение на дисплее
   * @memberof Display
   */
  resetDisplay() {
    this.value = 0
  }
}

export default Display