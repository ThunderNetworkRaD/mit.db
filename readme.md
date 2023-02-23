# Mit.db

```js
const MitDB = require('mit.db');
const db = new MitDB('file.db'); // this is the save file's name + extension
async function sample() {
    // assuming 'somekey' exists in the Map and has a value { cool: false }
    const data = db.get('somekey');
    // reassigning the 'cool' property a new value
    data.cool = true;
    await db.set('somekey', data);
    // now 'somekey' has a new value { cool: true }
}
```

### Docs

#### Installation

With **npm**:

`npm i mit.db`


#### Setup

```js
const MitDB = require('mit.db')
const db = new MitDB('database.json') // this is the save file's name + extension
```

#### set()

```js
    await db.set('ciao', 'hello')
    await db.set('arrivederci', 'bye')
```

#### get()

```js
var ansa = db.get('ciao') // ansa = hello
```

#### has()

```js
var asnb = db.has('arrivederci') // ansb = true
```

#### entries()

```js
var ansc = db.entries() // ansc = [ 'ciao', 'hello' ], [ 'arrivederci', 'bye' ] ]
```

#### keys()

```js
var ansd = db.keys() // ansd = [ 'ciao', 'arrivederci' ]
```

#### values()

```js
var anse = db.values() // anse = [ 'hello', 'bye' ]
```

#### forEach()

```js
db.forEach((value, key) => console.log(value, key)) // console.log = hello ciao
// console.log = bye arrivederci
```

#### delete()

```js
// [{"key":"ciao","value":"hello"}, {"key":"arrivederci","value":"bye"}]
await db.delete('ciao')
// [{"key":"arrivederci","value":"bye"}]
```

#### clear()

```js
// [{"key":"ciao","value":"hello"}, {"key":"arrivederci","value":"bye"}]
await db.delete('ciao')
// []
```

#### size()

```js
// [{"key":"ciao","value":"hello"}, {"key":"arrivederci","value":"bye"}]
var ansf = db.size() // size = 2
```