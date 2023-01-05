let socket = io();

socket.on("connect", function () {
  console.log("Connected to the server");
});

socket.on("disconnect", function () {
  console.log("Disconnected from server");
});

socket.on('newMessage', function (message) {
    console.log("newMessage", message);
});

socket.emit('createMessage', {
  from: 'John',
  text: 'Hey'
}, function (message){
  console.log(message, 'Got it.');
});

document.querySelector('#submit-btn').addEventListener('click', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: "User",
    text: document.querySelector('input[name="message"]').value
  }, function() {

  })
})