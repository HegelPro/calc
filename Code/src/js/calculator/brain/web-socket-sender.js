import { log } from "util";

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

    var submit = elementCalc.querySelector(".btn-count-on-server")

    /**
     * Создание события для кнопки, при котором будет отправляться сообщение на ws сервер со значением на дисплее
     */
    submit.addEventListener("click", () => {
      new Promise( res => {
        // 1) при нажатии на кнопку с зайцем создаем веб соккер соединение
        var socket = new WebSocket("ws://localhost:8081");

        // 2) если удалось подключиться к серверу (это занимет время)
        socket.addEventListener('open', () => {
          console.log("Open connection");
          
          res(socket) // 3) разрешаем дальнейщие действия
        })

        /**
         * При получении сообщения с сервера меняет значение на дисплее
         * 
         * @param {Event} event 
         */
        socket.onmessage = function(event) {  // 5) если пришло сообщение обрабатываем
          display.value = event.data;

          socket.close()  // 6) после чего закрываем соединение
        };

        socket.onclose = function(event) {
          console.log("Close connection");
        }

        socket.onerror = function(event) {
          socket.close()

          alert("Error: " + event.reason);

          req('Something error')
        };
      })
      .then((socket) => {
        var outgoingMessage = display.value;
      
        socket.send(outgoingMessage); // 4) отправка сообщения на сервер
      } )
      .catch(e => { console.log(e) })
      .finally(() => { console.log( "it's default console.log()" ) })
    })
  }
}

export default WebSocketSender