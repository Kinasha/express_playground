const express = require('express')
const app = express()
const port = 3001
app.use(express.static(__dirname))
app.get("/", function (req, res) {
    // res.send({msg:"I am here from 3001 ¬_¬"});
    res.send("I am here from 3001 ¬_¬");
})
app.listen(port,()=>{
    console.log('is listening at ',port)
})