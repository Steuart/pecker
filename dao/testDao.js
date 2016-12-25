let nedb = require("../comm/nedb").getDb();
let Rocket = require("../comm/rocket").Rocket;

exports.getData=function(rocket){
    nedb.find({name:"hello"},(err,doc)=>{
        rocket.result=doc;
        rocket.emit(Rocket.READY);
    });
};

exports.getMenu=function(rocket) {
    let sql="select * from article";
    mysqlDb.query(sql,(err,result)=>{
        console.log(result);
        rocket.result=result;
        rocket.emit(Rocket.READY);
    });
}

