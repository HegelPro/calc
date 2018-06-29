function Keypad() {
  this.btnMinus = document.querySelector("#btn-minus");
  this.btnPlus = document.querySelector("#btn-plus");
  this.btnMult = document.querySelector("#btn-mult");
  this.btnDivide = document.querySelector("#btn-divide");

  this.btn0 = document.querySelector("#btn-0");
  this.btn1 = document.querySelector("#btn-1");
  this.btn2 = document.querySelector("#btn-2");
  this.btn3 = document.querySelector("#btn-3");
  this.btn4 = document.querySelector("#btn-4");
  this.btn5 = document.querySelector("#btn-5");
  this.btn6 = document.querySelector("#btn-6");
  this.btn7 = document.querySelector("#btn-7");
  this.btn8 = document.querySelector("#btn-8");
  this.btn9 = document.querySelector("#btn-9");

  this.btnEqually = document.querySelector("#btn-equally");
  this.btnDelete = document.querySelector("#btn-delete");
  this.btnReset = document.querySelector("#btn-reset");
}



module.exports = new Keypad()