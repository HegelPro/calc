var WebSocketServer = new require('ws');

/**
 * Создаем webSocket сервер на порту 8081
 */
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});

/**
 * Создаем событие конект для нашего сервера в котором выполняется фенкция колбек с соединением ws для каждого пользователя
 */
webSocketServer.on('connection', function(ws) {
    /**
     * Создаем событие для получения сообщения с клиента
     */
    ws.on('message', function(message) {
      console.log('received message ' + message);

      ws.send( fib(message) )   // отправка сообщения клиенту
    });
      
    ws.on('close', function() {});
      
    ws.on('error', function() {});
});

/**
 * число фибоначи
 * 
 * @param {Number} num - созиция числа в последовательности фибоначи
 * @return {String} b - значение числа фибоначи на позиции num
 */
function fib(num) {
    num = Number(num)

    var a = 1, b = 1;
    for (var i = 3; i <= num; i++) {
        var c = a + b;
        a = b;
        b = c;
  }

  return b.toString();
}


