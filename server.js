const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/noughts_and_crosses'));

app.get('/*', function( req, res ) {
    res.sendFile(path.join(__dirname+
    '/dist/noughts_and_crosses/index.html'));
});

app.listen(process.env.PORT || 8080);