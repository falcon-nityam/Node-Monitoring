/*
 * Primary file for the API 
 * 
 * 
 * 
 */


//  Dependencies
const http=require('http')

// The server should respont to all the request with the string
let server=http.createServer((req,res)=>{
    res.end('Hello world')
})

// Start the server, and have it listen on port 5000
server.listen(5000,()=>{
    console.log('Server started on port 5000')
})