exports.plugin = {
    name:"Demo",
    once:true,
    register:(server,options)=>{
        server.route([
            {
                path:'/',
                method:["GET"],
                handler:(request,h)=>{
                    return _data_version_1
                }
            }
        ])
    }
}