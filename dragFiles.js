module.exports.dragFiles = function (parent) {
    const obj = {};

    obj.parent = parent;
    obj.meshServer = parent.parent;



    obj.getAll = function () {
        obj.meshServer.db.GetAll((err, infos) => {
            //console.log(infos);
            infos.forEach(element => {
                if (JSON.parse(JSON.stringify(element))["name"] === undefined) {
                    return;

                } else {

                    // console.log("Nome:\n", JSON.parse(JSON.stringify(element))["name"]);

                         console.log(`\nID:${(JSON.parse(JSON.stringify(element))["_id"]).split("//")[1]} + NOME:${JSON.parse(JSON.stringify(element))["name"]}`);

                }
            });
        })
    }


    obj.server_startup = function () {
            //    console.log(Object.keys(obj.meshServer.db))
            //    console.log(obj.meshServer.filespath);
            
        obj.getAll();

    };

    return obj;

}