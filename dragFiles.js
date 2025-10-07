module.exports.dragFiles = function (parent) {
    const obj = {};

    obj.parent = parent;

    obj.server_startup = function () {
        console.log("Teste")
    };


    return obj;

}