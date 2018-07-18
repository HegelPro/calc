class Display {
  constructor(elementCalc) {
    this.element = elementCalc.querySelector(".display")
  }

  set value(value) {
    this.element.value = value
  }

  get value() {
    return this.element.value
  }

  addSymbel(value) {
    if(this.element.value === '0') this.value = value
    else this.value += value
  }

  deleteSymbel() {
    if(this.value.length <= 1) this.value = 0
    else this.value = this.value.slice(0, this.value.length-1)
  }

  resetDisplay() {
    this.value = 0
  }
}

module.exports = Display