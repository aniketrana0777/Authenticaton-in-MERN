const express = require('express');
const cors = require('cors')
const bodyParser =require("body-parser")
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected');
}
const userSchema=new mongoose.Schema({
    name:String,
    number:Number,
    password:String
});

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo',async(req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.number = req.body.number;
    user.password=req.body.password;
   const doc = await user.save();
    console.log(doc)
    res.json(doc);
})


server.listen(2000,()=>{
    console.log('server start')
})