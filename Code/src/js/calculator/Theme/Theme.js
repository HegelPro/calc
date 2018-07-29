/**
 * @class Theme - цель класса менять вид калькулятора
 * 
 */
class Theme {
  constructor() {
    this.btnThemeColor = document.querySelector("#theme-color");

    this.btnThemeMode = document.querySelector("#theme-mode");

    this.calc = document.querySelectorAll(".calc");
    this.keypad = document.querySelectorAll(".calc__btn");
    this.display = document.querySelectorAll(".display");
    this.list = document.querySelectorAll(".calc__history");
    this.btnReset = document.querySelectorAll(".btn-reset");
  }

  switchOnDark() {
    this.display.forEach(element => {
      element.className += " dark"
    });   
    this.list.forEach(element => {
      element.className += " dark"
    });   
    this.calc.forEach(element => {
      element.className += " dark"
    });   
    this.keypad.forEach(element => {
      element.className += " dark"
    });    
  }

  switchOnLight() {
    this.display.forEach(element => {
      element.className = element.className.replace(" dark", '');
    });
    this.list.forEach(element => {
      element.className = element.className.replace(" dark", '');
    });
    this.calc.forEach(element => {
      element.className = element.className.replace(" dark", '');
    });
    this.keypad.forEach(element => {
      element.className = element.className.replace(" dark", '');
    });
  }

  switchOnScientific() {
    this.keypad.forEach(element => {
      element.className += " resize"
      element.style.display = "block"
    });   
  }

  switchOnNormal() {
    this.keypad.forEach(element => {
      element.className = element.className.replace(" resize", '');
      element.style = "";
    });
  }
}

export default Theme;