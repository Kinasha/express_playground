const express = require('express')
const http = require('http')
const app = express()
const port = 3000
app.use(express.static(__dirname))
app.get('/proxy',(request,response)=>{
    const url = request.query.url
    http.get(url,(responseFromOtherOrigin)=>{
        responseFromOtherOrigin.on('data',(data)=>{
            response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
            response.end(data)
        })
    })
})
app.listen(port,()=>{
    console.log('is listening at ',port)
})