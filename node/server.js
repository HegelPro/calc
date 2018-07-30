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
  console.log('+user')
  /**
   * Создаем событие для получения сообщения с клиента
   */
  ws.on('message', function(message) {
    toMission.call(ws, message);  // 1) получаем сообщение
  });
    
  ws.on('close', function() { console.log('-user') });
    
  ws.on('error', function(e) { console.log(e) });
});

/**
 * число фибоначи
 * 
 * @param {Number} num - созиция числа в последовательности фибоначи
 * @return {String} b - значение числа фибоначи на позиции num
 */
function fib(num) { // 4) обрабатываем сообщение
  num = Number(num)

  var a = 1, b = 1;
  for (var i = 3; i <= num; i++) {
      var c = a + b;
      a = b;
      b = c;
  }

  return b.toString();
}

function toMission(message) {
  return new Promise((res, req) => {
    if(message === '' && message === undefined) req("Message is empty")
    else if( !/[-]?[0-9]*[.]?[0-9]+/.test(message) ) req("Not is number")
    setTimeout(() => {  // 2) через 0.5 секунды узнаем с правильный у нас ответ(90%) или нет (10%)
      if(Math.random() > 0.1) res() // 3) разрешает отправлять сообщение
      else req()
    }, 500)
  })
  .then(() => {
    this.send( fib(message) ) // 5) отправляем сообщение
  })
  .catch((req) => {
    if(req === "Message is empty") this.close(1007, "Nothing")
    else if(req === "Not is number") this.close(1007, "NaN")
    else if(req === "Accidental error") this.close(1000, "Accidental error")
    else this.close()
  })
  .finally(() => { console.log("it's default console.log()") })
}