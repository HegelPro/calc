class Display {
  constructor(elementCalc) {
    this.element = elementCalc.querySelector(".display")

    this.toWriteInLowerCase = false

    this.upperToLower = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉']
  }

  set value(value) {
    this.element.value = value
  }

  get value() {
    return this.element.value
  }

  setDefouldState() {
    this.toWriteInLowerCase = false
  }

  inverseLostNumber() {
    var array = this.value.match(/[-]?[0-9]*[.]?[0-9]+/g)
    var lostValue = array[array.length - 1]
    var inversedLostValue = -lostValue

    this.value = this.value.replace(lostValue, inversedLostValue.toString())
  }

  addSymbel(value) {
    if( this.element.value === '0' ) {
      this.value = value
    } else if( value === 'log' ) {
      var array = this.value.match(/[-]?[0-9]*[.]?[0-9]+/g)
      var lostValue = array[array.length - 1]

      this.toWriteInLowerCase = true

      this.value = this.value.replace(this.value.slice(this.value.lastIndexOf(lostValue), this.value.length), 'log(' + lostValue + ')')
    } else if( this.toWriteInLowerCase ) {
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

  deleteSymbel() {
    if(this.value.length <= 1) this.value = 0
    else this.value = this.value.slice(0, this.value.length-1)
  }

  resetDisplay() {
    this.value = 0
  }
}

export default Display