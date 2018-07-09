function History(elementCalc) {
  this.list = elementCalc.querySelector('.history');

  this.addElem = function(reseltStr) {
    var newElement = document.createElement("li");

    newElement.innerText = reseltStr;

    this.list.append(newElement);
  }

  this.addHr = function() {
    var newElement = document.createElement("li");
    var hr = document.createElement('hr');

    newElement.append(hr);
    this.list.append(newElement);
  }
}

module.exports = History