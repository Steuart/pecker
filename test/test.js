/**
 * Created by Administrator on 2016/12/24.
 */
var events = require("events");

var emitter = new events.EventEmitter();

emitter.on("ready",function(){
   console.log("事件处理")
});
setTimeout(function () {
   emitter.emit("ready");
},1000);