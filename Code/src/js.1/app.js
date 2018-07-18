require('bootstrap/dist/css/bootstrap.min.css');
const Controller = require("./Calc/Controller");

// инициализируем перный калькулятор
new Controller(document.querySelector('#calc'));

// инициализируем второй калькулятор
new Controller(document.querySelector('#calc2'));