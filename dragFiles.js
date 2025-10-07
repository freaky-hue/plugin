module.exports.dragFiles = function (parent) {
    var obj = {};

    obj.parent = parent;
    obj.meshServer = parent.parent;
    obj.debug = obj.meshServer.debug;



    obj.server_startup = function () {
        console.log("Teste ")
    };


    return obj

}