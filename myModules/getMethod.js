const fs = require("fs"),
    url = require('url'),
    path = require("path"),
    mimeType = require("./mimetype.js"),
    fileReader = require("./fileReader.js"),
    sendResponse = require("./sendResponse.js");

//обрабатывает все GET-запросы
function getMethod(req, res, startPath) {
    const urlParse = url.parse(req.url);
    const query = urlParse.query,
    pathname = (urlParse.pathname == "/") ? "index.html" : urlParse.pathname;
    const pathParse = path.parse(pathname);
    const pathJoin = path.join(startPath, pathname);

    fileReader(pathJoin, (data, ext) => {
        const extFile = ext || pathParse.ext
        sendResponse(res, data, mimeType[extFile]);
    })
};

module.exports = getMethod;