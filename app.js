var express = require('express'),
    path = require('path'),
    sqlite3 = require('sqlite3').verbose(),
    bggdb = new sqlite3.Database('bgg.sqlite'),
    app = express(),
    gamesRouter = require('./routes/gamesRouter'),
    port = 7999;

// SQLite3 read from bgg.sqlite
bggdb.serialize(function() {
    
});
var app = express();
app.use('/games', gamesRouter);
app.listen(port);
