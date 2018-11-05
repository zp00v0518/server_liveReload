//получает данные приходящие по POST-запросу
function reqOn(req, callback) {
    var data = "";
    req.on("data", chunk => { data += chunk });
    req.on("end", () => {
        return callback(data);
    });
}
module.exports = reqOn;