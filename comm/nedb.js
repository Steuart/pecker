const Nedb=require("nedb");
//数据库
let db;
function getDb(){
    if(db==null){
        db=new Nedb({filename:'./database/data',autoload: true});
        console.log("数据库加载成功");
    }
    return db;
}


exports.getDb=getDb;
