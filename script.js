function makeid(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() *
      charactersLength)));
  }
  return result.join('');
}

var myVar = setInterval(sendMessage, 200);
let c = 0
let max = 10
async function sendMessage() {
  await document.execCommand("insertText", false, makeid(7));
  let len = document.getElementsByClassName('sqdOP yWX7d y3zKF').length
  if (document.getElementsByClassName('sqdOP yWX7d y3zKF')[len - 1]) {
    document.getElementsByClassName('sqdOP yWX7d y3zKF')[len - 1].click()
  }
  c++
  if (c >= max) {
    stopMessage()
  }
}

function stopMessage() {
  clearInterval(myVar);
}

