var colors = require('colors');
var readlineSync = require('readline-sync');
var server = require('./src/server.js');
server('gui')

class mitdb {
    /**
     * @constructor
     * @param type This can be 'client' or 'server'
     * @param link If type = client, this is the server address (with the port), if type = server, this is the port
     * @example (client) http://0.0.0.0:12934
     * @example (server) 12934
     */
    
    constructor (type, link) {
        this.type = type;
        this.link = link;
        if (type == 'client') {

        } else if (type == 'server') {
            server('api')
        } else {
            throw new Error('Type is required')
        }
    }
    server
}

module.export = mitdb
/*
{}
*/