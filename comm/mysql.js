const mysql=require("mysql2");

const config={
    host:"localhost",
    port:"3306",
    user:"root",
    password:"wuhaiming!2#$",
    database:"tree"

};

let conn = mysql.createConnection(config);
function getDb(){
    if(conn==null){
        conn = mysql.createConnection(config);
        console.log("mysql数据库连接成功");
    }
    else{
        return conn;
    }
}

exports.getDb=getDb;