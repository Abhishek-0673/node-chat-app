const path = require('path');

const publicPath = path.join(__dirname,'../public');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
// res.send("Welcome!! to new node app");
// });

app.use(express.static(publicPath));

app.listen(PORT,()=>
{
    console.log(`Server started running on port ${PORT}`)
},(err)=>{
console.log("Failed to start the server..");
});