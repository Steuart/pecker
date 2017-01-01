/**
 * API
 * Created by wuhaiming on 2017/1/1.
 */

const API={
    baseUrl:'http://127.0.0.1:3000/',
    post: function (url, data, async, callback, errorcallback) {
        data.contentType = "json";
        var settings = {
            type: 'POST',
            url: API.baseUrl+url,
            data: data,
            async: async,
            cache: false,
            dataType: 'json',
            beforeSend: function () {
                return true;
            },
            success: function (res) {
                callback(res);
            },
            error: function (result) {
//                window.location.href = "../login.html";
//                errorcallback(result);
            },
            complete: function () {
            }
        };
        $.ajax(settings);
    },

    get: function (url, data, async, callback, errorcallback) {
        data.contentType = "json";
        var settings = {
            type: 'GET',
            url: API.baseUrl+url,
            data: data,
            async: async,
            cache: false,
            dataType: 'json',
            beforeSend: function () {
                return true;
            },
            success: function (res) {
                callback(res);
            },
            error: function (result) {
//                window.location.href = "../login.html";
//                errorcallback(result);
            },
            complete: function () {
            }
        };
        $.ajax(settings);
    },

    test:function (callback) {
        API.post("test.do",{},true,callback);
    }
};


export default API
