const express = require("express");
const app = express();
const port = 3001;
app.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin','http://localhost:3000')
  res.send({data:"Hello world from 3001"});
});
app.listen(port,()=>{
    console.log('server is listening')
})