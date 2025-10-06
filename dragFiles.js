module.exports.dragFiles = function (parent) {
    var obj = {};

    obj.parent = parent;
    obj.meshServer = parent.parent;
    obj.debug = obj.meshServer.debug;



    obj.server_startup = function () {
        obj.meshServer.pluginHandler.scripttask_db = require(__dirname + '/db.js').CreateDB(obj.meshServer);
        obj.db = obj.meshServer.pluginHandler.scripttask_db;
        obj.resetQueueTimer();
    };


    obj.gpD = function () {
        const devicesGroups = parent.ListDeviceGroups();

        console.log(devicesGroups);
        
    }


    return obj

}