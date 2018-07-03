function Theme() {
  this.btnDarkTheme = document.querySelector("#theme-dark");
  this.btnLightTheme = document.querySelector("#theme-light");

  this.btnScientificTheme = document.querySelector("#theme-scientific-mode");
  this.btnNormalTheme = document.querySelector("#theme-normal-mode");

  this.calc = document.querySelector(".calc");
  this.keypad = document.querySelectorAll(".btn-primary");
  this.display = document.querySelector("#display");
  this.list = document.querySelector(".calc__history");
  this.btnReset = document.querySelector("#btn-reset");


  this.switchOnDark = function() {
    this.display.className += " dark"
    this.list.className += " dark"
    this.calc.className += " dark"
    this.keypad.forEach(element => {
      element.className += " dark"
    });    
  }

  this.switchOnLight = function() {
    this.display.className = this.display.className.replace(" dark", '');
    this.list.className = this.list.className.replace(" dark", '');
    this.calc.className = this.calc.className.replace(" dark", '');
    this.keypad.forEach(element => {
      element.className = element.className.replace(" dark", '');
    });
  }

  this.switchOnScientific = function() {
    this.keypad.forEach(element => {
      element.style.display = "block"
      element.style.width = "20%"
    });
  }

  this.switchOnNormal = function() {
    this.keypad.forEach(element => {
      element.style = ""
    });
  }
}

module.exports = new Theme();