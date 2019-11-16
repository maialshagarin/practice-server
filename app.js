"use strict";
const express = require('express'); /////////////// this vs code need the express " like calling the express "///////
const server = express(); ///// link with server //////
const PORT = process.env.PORT || 3000 ;  ////// recervied or pick port " i want 3000 if not found choose another " /////// 

server.use(express.static('./public'));

server.get('/test', (request,response) => {
    response.send('haneen is cow ');
});
server.get('/data', (request,response)=> {
let friends =[
    {name:'haneen'},
    {name:'nawal'},
{name:'fatima'},
{name:'gorob'},
{name:'mai'},]
response.json(friends);
})












server.listen(PORT,() => 
console.log('listen on port', PORT)); ///// to know what port i choose then test in terminal  via  npmstart
/////////
