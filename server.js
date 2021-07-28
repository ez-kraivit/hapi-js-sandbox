const Hapi = require('@hapi/hapi') 
const _HapiPathPlugin = require('./coreplugins/HapiPathPlugin')
const initServer = async (options) =>{

    let server = new Hapi.Server({
        port:5555
    })
    server.app._data_version_1 = _data_version_1 = require('./data.json')
    await server.register(_HapiPathPlugin)
    return server;

}

module.exports = { initServer }