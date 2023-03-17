/*
Dear future Robert: This program bounces requests back to all clients. If it is the same ID as what is inputted into the url, then it will display that.
I sure hope you know what the hell you are doing, as it's likely you haven't viewed this in awhile.
*/


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});
app.get('/client', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});
app.get('/server', (req, res) => {
  res.sendFile(__dirname + '/server.html');
});
app.get('/cookies.js', (req, res) => {
  res.sendFile(__dirname + '/cookies.js');
});
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});
app.get('/getreq', (req, res) => {
  res.sendFile(__dirname + '/getreq.html');
});
app.get('/mobile-server', (req, res) => {
  res.sendFile(__dirname + '/mobile-server.html');
});
app.get('/mobile-client', (req, res) => {
  res.sendFile(__dirname + '/mobile-client.html');
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//Bouncy bouncy!
io.on('connection', (socket) => {
  socket.on('varlist', (vl,id) => { //get
    io.emit('varlist',vl,id );      //give
    //console.log('varlist'+vl+' ID:'+id) We don't need to log this.
  });
});