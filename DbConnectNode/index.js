// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
var route = require('./routes/route');
//port number
const port = 3000;
//connect to mongoDb
mongoose.connect('mongodb://localhost/myDb');
//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb @ 27017');
});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection :' + err);
    }
});
//adding middleware -cors
app.use(cors());
//adding middleware -body-parser
app.use(bodyparser.json());

//routes
app.use('/', route);

//testing server
// app.get('/', (req, res) => {
//     res.send('foobar');
// })

app.listen(port, () => {
    console.log('port strated at ' + port);
})