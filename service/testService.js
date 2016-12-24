const Rocket = require("../comm/rocket").Rocket;
const testDao=require("../dao/testDao");


function getData(res){

    let rocket = new Rocket();

    testDao.getData(rocket);
    rocket.on(Rocket.READY,()=>{

        let data = rocket.result;
        res.json({data:data});
    });
}

exports.getData=getData;