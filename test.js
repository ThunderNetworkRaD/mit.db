const MitDB = require('./build/index.js')

var db = new MitDB('file.json')

async function run () {
    await db.set('ciao', 'hello')
    await db.set('arrivederci', 'bye')

    console.log(db.size())
}

run()