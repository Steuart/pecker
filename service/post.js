const http = require("http");

let config={
    hostname:"localhost",
    port:"8080",
    path:"/login.action",
    method:"post",
    data:{UserName:test,Password:123456}
};


http.get(config,(res)=>{
    res.on("data",(chunk)=>{
        console.log(JSON.parse(chunk));
    });
});
