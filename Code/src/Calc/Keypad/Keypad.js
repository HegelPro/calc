function Keypad(elementCalc) {
  this.btnMinus = elementCalc.querySelector(".btn-minus");
  this.btnPlus = elementCalc.querySelector(".btn-plus");
  this.btnMult = elementCalc.querySelector(".btn-mult");
  this.btnDivide = elementCalc.querySelector(".btn-divide");

  this.btn0 = elementCalc.querySelector(".btn-0");
  this.btn1 = elementCalc.querySelector(".btn-1");
  this.btn2 = elementCalc.querySelector(".btn-2");
  this.btn3 = elementCalc.querySelector(".btn-3");
  this.btn4 = elementCalc.querySelector(".btn-4");
  this.btn5 = elementCalc.querySelector(".btn-5");
  this.btn6 = elementCalc.querySelector(".btn-6");
  this.btn7 = elementCalc.querySelector(".btn-7");
  this.btn8 = elementCalc.querySelector(".btn-8");
  this.btn9 = elementCalc.querySelector(".btn-9");
  this.btnDot = elementCalc.querySelector(".btn-dot");
  this.btnPercent = elementCalc.querySelector(".btn-percent");

  this.btnEqually = elementCalc.querySelector(".btn-equally");
  this.btnDelete = elementCalc.querySelector(".btn-delete");
  this.btnReset = elementCalc.querySelector(".btn-reset");

  this.btnPow = elementCalc.querySelector(".btn-pow");
  this.btnLog = elementCalc.querySelector(".btn-log");
  this.btnSqrtByBase = elementCalc.querySelector(".btn-sqrt-by-base");

  this.btnSqrt = elementCalc.querySelector(".btn-sqrt");
  this.btnFactorial = elementCalc.querySelector(".btn-factorial");
}



module.exports = Keypad