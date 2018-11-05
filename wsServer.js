const webSocket = require("ws");
const wsPort = 4444;
const watchFs = require("./myModules/watchFs.js");
var developerOnline = {};
 
 
var wsServer = new webSocket.Server({
	port: wsPort
}, ()=>{
	console.log("**************Сервер Websocket запущен на порту:", wsPort, "**************")

});

wsServer.on("connection", (ws, req)=>{
  const id = Math.random();
  developerOnline[id] = ws;
  // console.log("Подключился: "+id);
  watchFs(__dirname,()=>{
  	  // console.log("callback");
  	  for (let key in developerOnline){
  	  	developerOnline[key].send("change")
  	  }
  })
	ws.on('close', function(ws, qw) {
		delete developerOnline[id];
		 // console.log("Пользователь: "+id+" удален");
  });
 
});

