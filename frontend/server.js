const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/sicenad'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/sicenad/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log("Server running on port 5000...");
    });