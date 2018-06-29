require('bootstrap/dist/css/bootstrap.min.css');
const Controller = require("./Controller");

Controller.start();


for (let elem in Controller.view.keypad) {
  console.log(Controller.view.keypad[elem]);
}