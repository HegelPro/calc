require('bootstrap/dist/css/bootstrap.min.css');
const classController = require("./Controller");

var elementCalc = document.querySelector('#calc')
const Controller = new classController(elementCalc);

var elementCalc2 = document.querySelector('#calc2')
const Controller2 = new classController(elementCalc2);