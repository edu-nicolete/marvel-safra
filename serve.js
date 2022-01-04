'use strict'
var express = require('express');
var cors = require('cors');

// App
var app = express();
app.use(cors());
app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(__dirname + '/app'));

app.listen(app.get('port'), function() {
  console.log("running: port", app.get('port'));
});
