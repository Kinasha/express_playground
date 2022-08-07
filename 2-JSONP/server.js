const express = require("express");
const app = express();
const port = 3001;
app.get("/", (req, res) => {
  // res.set('Access-Control-Allow-Origin','http://localhost:3000')
  const callbackName = req.query.callback
  const key = req.query.key
  if(key===123){
    res.send(callbackName + "({'data':'Hello world from 3001'});");
  }else{
    res.send(callbackName + `({'data':'not Hello world from 3001 ${key}'});`);
  }
});
app.listen(port,()=>{
    console.log('server is listening')
})