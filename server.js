// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const app = express();

var jsonData = {count: 12, message: 'hey'};
const fs = require('fs');

app.get('/', (req, res) =>{
fs.readFile('index.html', (err, buffer) => {
    var html = buffer.toString();
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
})


    // res.sendFile(__dirname + '/index.html', (err) =>{
    //     if(err){
    //         res.status(500).send(err);
    //     }
    // })
})

app.get('/data', (req, res) =>{
    res.json(jsonData);
})

const port = 3000;
app.listen(port, () => {
    console.log('live on port' , port)
})


