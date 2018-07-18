require('bootstrap/dist/css/bootstrap.min.css');
const Controller = require("./calculator/controller")

// инициализируем перный калькулятор
new Controller(document.querySelector('#calc'));

// инициализируем второй калькулятор
// new Controller(document.querySelector('#calc2'));
