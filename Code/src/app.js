require('bootstrap/dist/css/bootstrap.min.css');
const classController = require("./Controller");

// инициализируем перный калькулятор
var elementCalc = document.querySelector('#calc')
const Controller = new classController(elementCalc);

// инициализируем второй калькулятор
var elementCalc2 = document.querySelector('#calc2')
const Controller2 = new classController(elementCalc2);