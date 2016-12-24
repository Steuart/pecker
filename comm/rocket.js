/**
 * Created by HemingWu on 2016/12/24.
 * 持有数据的对象
 */
const util = require('util');
const EventEmitter= require('events').EventEmitter;

function Rocket(){

    //传递参数
    this.param=null;

    //返回结果
    this.result=null;

}

//数据准备好事件
Rocket.READY="ready";

util.inherits(Rocket,EventEmitter);

exports.Rocket= Rocket;
