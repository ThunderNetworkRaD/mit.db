module.exports = (port) => {
    var defaultConfig = require('../config.js');
    var cm = require('../cm')

    var openOn = port || defaultConfig.port || 4000;

    const express = require('express')
    const app = express()

    app.get('/:command/:makewhat/:id/:token', function (req, res) {
        if (eval('cm.'+req.params.id) != req.params.token) return res.send('{ "Error"= "Invalid token or id" }')
        else console.log(req.params.command, req.params.makewhat)
    })

    app.listen(openOn)
}