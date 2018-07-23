// Выводит результаты операций
class History {
  constructor(elementCalc) {
    this.list = elementCalc.querySelector('.history');  // контейнер для вывода

    this.btnReset = elementCalc.querySelector('.reset-calc-history');

    this.btnReset.addEventListener('click', (event) => { 
      reset.call(this, event)
    });

    function reset(event) {
      event.preventDefault()
      
      this.list.removeChild(this.list.firstChild)
    }
  }

// добавляет елемент в историю
  addElem(reseltStr) {
    var newElement = document.createElement("li");

    newElement.innerText = reseltStr;

    this.list.append(newElement);
  }

// для добавления прочерка
  addHr() {
    var newElement = document.createElement("li");
    var hr = document.createElement('hr');

    newElement.append(hr);
    this.list.append(newElement);
  }
}

export default History