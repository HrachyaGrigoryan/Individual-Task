const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express()
const http = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyPArser.json());
app.use(bodyParser.urlencoded({extended: false}));

let messages = [
    {name: 'p1', message: 'hello1'},
    {name: 'p2', message: 'hello2'}
]

app.get('/messages', (req, res)=>{
    res.send(messages)
});
app.get('/messages', (req, res)=>{
    console.log(req.body);
    res.sendStatus(200);
});

import.on('connection,' (socket) => {
    console.log('a user connected');
})


app.listen(port, ()=>{console.log('Server is listening on port 3000')});