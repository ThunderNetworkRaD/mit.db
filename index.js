var client = [];
client.config = require('./config.js').settings;

const MapDB = require('quickmap.db');
const db = new MapDB('database.json');


async function setup() {
    var isset = await db.get('client.issetupped')
    if (!isset) {
        await db.set('client.issetupped', true)
    }
}

setup()
/*
var fs = require('fs');
var data = fs.readFileSync('./data/database.json');

var elements = JSON.parse(data); */
const express = require("express");
const app = express();

const cors=require('cors');
   
app.listen(client.config.port, 
    () => console.log("Server Start at the port "+client.config.port));
   
app.use(express.static('public'));
app.use(cors());

async function authenticate(token, response, what) {
    if (!client.config.auth.includes(token)) {
        response.send('ERROR - Not auth')
    } else {
        console.log(token + ' do '+ what)
    }
}

// All dates in the database

app.get('/api/:auth/database', alldata);
  
function alldata(request, response) {
    var token = request.params.auth;
    authenticate(token, response, 'alldata')
    response.send(elements);
}

// One element in the database

app.get('/api/:auth/database/:element/', searchElement);
  
async function searchElement(request, response) {
    var token = request.params.auth;
    var word = request.params.element;

    search = 'search '+ word
    authenticate(token, response, search)

    var elements = await db.get(word)
       
    if(elements) {
        var reply = elements;         
    } else {
        var reply = {
            status:"Not Found"
        }
    }
       
    response.send(reply);
}

// Set a db variable

app.get('/api/:auth/database/:element/set/:data', set);
  
async function set(request, response) {
    var token = request.params.auth;
    var element = request.params.element;
    var data = request.params.data;

    set = 'set '+element+' to '+data
    authenticate(token, set)
    
    await db.set(element, response, data)
    const res = await db.get(element)
    if(res) {
        var reply = res;         
    } else {
        var reply = {
            status:"Not Found"
        }
    }
       
    response.send(reply);
}