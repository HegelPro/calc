// Выводит результаты операций
function History(elementCalc) {
  this.list = elementCalc.querySelector('.history');  // контейнер для вывода

// добавляет елемент в историю
  this.addElem = function(reseltStr) {
    var newElement = document.createElement("li");

    newElement.innerText = reseltStr;

    this.list.append(newElement);
  }

// для добавления прочерка
  this.addHr = function() {
    var newElement = document.createElement("li");
    var hr = document.createElement('hr');

    newElement.append(hr);
    this.list.append(newElement);
  }
}

module.exports = History