function Theme() {
  this.btnDarkTheme = document.querySelector("#theme-dark");
  this.btnLightTheme = document.querySelector("#theme-light");

  // this.customContainer = document.querySelector(".");
  this.calc = document.querySelector(".calc");
  this.keypad = document.querySelectorAll(".btn-primary");
  // this.body = document.querySelector("body");
  this.display = document.querySelector("#display");
  this.list = document.querySelector(".calc__history");
  this.btnReset = document.querySelector("#btn-reset")

  this.switchOnDark = function() {
    
    this.display.style.color = "#fff"
    this.display.style.backgroundColor = "#000"
    this.display.style.borderColor = "#000"

    this.list.style.color = "#fff"
    this.list.style.backgroundColor = "#000"
    this.list.style.borderColor = "#000"

    this.keypad.forEach(element => {
      element.className += " dark"
    });

    this.btnReset.className += " dark"
    
    this.calc.style.backgroundColor = "#bb3018"
  }

  this.switchOnLight = function() {
    this.display.style = ""
    this.list.style = ""
    this.calc.style = ""


    this.keypad.forEach(element => {
      element.className = element.className.replace(" dark", '');
    });

    this.btnReset.className = this.btnReset.className.replace(" dark", '');
  }
}

module.exports = new Theme();