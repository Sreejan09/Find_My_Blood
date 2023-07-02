const express = require('express');

const http = require('http');
const cors= require('cors')
let {connectToDb , getDb} = require('./db');
const { type } = require('os');
// const db = require('./db');
const app = express();
app.use(cors());
app.use(express.json())

const server = http.createServer(app);

const PORT =  8000;
let db
// checking connection to database
connectToDb((err)=>{
    
    if(!err){
        server.listen(PORT,()=>{
            console.log("Listening to port 8000...")
        })
        db = getDb();
    }else{
        console.log(err)
    }
})

app.post('/adduser', (req, res)=>{
    console.log(req.body);
    if(req.body.phoneNumber.length!==10){
        res.send({
            error : "Phone number is not valid"
        })
    }
    else if(req.body.name.length<0){
        res.send({
            error : "Name is not valid"
        })
    }
    else if(req.body.address.length<0){
        res.send({
            error : "Address is not valid"
        })
    } 
    else if(req.body.email.length<0){
        res.send({
            error : "Email is not valid"
        })
    }
    // else if()
    else{
    db.collection("peopleInfo").insertOne({
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        bloodGroup:req.body.bloodGroup,
        email:req.body.email 
        
    })
    res.send({status:"success"})
}

}

)

app.post('/getBloodGroup', (req, res)=>{
    console.log(req.body)
    
    db.collection("peopleInfo")
    .find({ bloodGroup: req.body.bloodGroup }).toArray()
    .then((doc) => {
      console.log(doc)
      console.log(typeof(doc))
      res.send(doc)
    });
    
})