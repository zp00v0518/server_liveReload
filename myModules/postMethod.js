const fs = require("fs");
const url = require('url')
const path = require("path");
const reqOn = require("./reqOn.js")

//обрабатывает все POST-запросы
function postMethod(req, res) {
    reqOn(req, (data) => {
        const urlParse = url.parse(req.url);
         if (urlParse.pathname === "/getData") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("very good");
         }
    })
}

module.exports = postMethod;