const fs = require("fs");

function watcher(pathWatch, callback = function() {}) {
    return new Promise((resolve, reject) => {
        const watcher = fs.watch(pathWatch, { recursive: true }, (eventType, filename) => {
            watcher.close();
            if (filename) {
                callback(filename)
                return resolve(filename)
            }
        });
    })
}

module.exports = watcher;