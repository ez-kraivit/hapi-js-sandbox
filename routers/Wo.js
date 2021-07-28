exports.plugin = {
    name:"Wo",
    once:true,
    register:(server,options)=>{
        server.route([
            {
                path:'/wo/',
                method:["GET"],
                handler:(request,h)=>{
                    return 'wo'
                }
            }
        ])
    }
}