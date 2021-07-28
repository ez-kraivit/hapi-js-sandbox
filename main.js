const init = async () =>{
    const Server = require('./server')
    let server = await Server.initServer();
    await server.start();
    console.info(`Server runing on localhost:${server.info.port}`);
}

init()