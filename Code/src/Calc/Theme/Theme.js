function Theme() {
  this.btnDarkTheme = document.querySelector("#theme-dark");
  this.btnLightTheme = document.querySelector("#theme-light");

  this.btnScientificTheme = document.querySelector("#theme-scientific-mode");
  this.btnNormalTheme = document.querySelector("#theme-normal-mode");

  this.calc = document.querySelectorAll(".calc");
  this.keypad = document.querySelectorAll(".calc__btn");
  this.display = document.querySelectorAll(".display");
  this.list = document.querySelectorAll(".calc__history");
  this.btnReset = document.querySelectorAll(".btn-reset");


  this.switchOnDark = function() {
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

  this.switchOnLight = function() {
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

  this.switchOnScientific = function() {
    this.keypad.forEach(element => {
      element.className += " resize"
      element.style.display = "block"
    });   
  }

  this.switchOnNormal = function() {
    this.keypad.forEach(element => {
      element.className = element.className.replace(" resize", '');
      element.style = "";
    });
  }
}

module.exports = Theme;