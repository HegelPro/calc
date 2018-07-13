require('bootstrap/dist/css/bootstrap.min.css');
const classController = require("./Controller");

// инициализируем перный калькулятор
new classController(document.querySelector('#calc'));

// инициализируем второй калькулятор
new classController(document.querySelector('#calc2'));