/**
 * Класс для создания связи с webSocketServer
 * 
 */
class WebSocketSender {
  /**
   * @param {Dom-node} elementCalc - родительский класс для калькулятора
   * @param {Display} display - дисплей калькулятора
   */
  constructor(elementCalc, display){
    /**
     * Создание соединения с webSocketServer по протаколу ws, адрeсом localhost, на порте 8081
     */
    var socket = new WebSocket("ws://localhost:8081");

    var submit = elementCalc.querySelector(".btn-count-on-server")

    /**
     * Создание события для кнопки, при котором будет отправляться сообщение на ws сервер со значением на дисплее
     */
    submit.addEventListener("click", function() {
      var outgoingMessage = display.value;
      
      socket.send(outgoingMessage); // отправка сообщения на сервер
    })

    /**
     * При получении сообщения с сервера меняет значение на дисплее
     * 
     * @param {Event} event 
     */
    socket.onmessage = function(event) {
      display.value = event.data;
    };
  }
}

export default WebSocketSender