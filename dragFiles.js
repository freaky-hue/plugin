
// console.log("plugin loaded")
module.exports.dragFiles = function (parent) {
    const obj = {};
    obj.parent = parent;
    obj.meshServer = parent.parent;



    obj.getAll = function () {
        obj.meshServer.db.GetAll((err, infos) => {
            infos.forEach(element => {
                if (element.name) {
                    id = element._id;
                    console.log("Name:" + element.name + "  Id:" + id);
                }
            });
        })
    }


    obj.getAgents = function () {
        obj.meshServer.db.GetAll((err, infos) => {
            infos.forEach(element => {

                if (element.type && element.type == "node") {
                    console.log(element.name + "   " + element._id)
                }

            });
        })

    }




    obj.hook_agentCoreIsStable = function (agentObj, gp) {


        const ws = obj.meshServer.webserver.wsagents[agentObj.dbNodeKey];

        console.log(ws);

        // setTimeout(() => {
        //     ws.send({
        //         action: 'msg',
        //         nodeid: agentObj.dbNodeKey,
        //         value: "aaaaaaa"
        //     })
        // }, 5000)

    };



    obj.server_startup = function () {
        // obj.getAll();

    }
    return obj;

}


