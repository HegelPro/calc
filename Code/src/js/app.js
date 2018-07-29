import 'bootstrap/dist/css/bootstrap.min.css'
import Controller from "./calculator/calculator.controller"

/**
 * Запуск приложения
 */
new Controller('#calc');

// инициализируем второй калькулятор
// new Controller(document.querySelector('#calc2'));
