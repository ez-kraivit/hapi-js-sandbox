const Glob = require('glob-all')
let arrayPath = Glob.sync([
    "./routers/*.js"
])
module.exports = arrayPath.map(js => require(`.${js}`));