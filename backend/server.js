import express from 'express'
import mongoose from 'mongoose'

const app=express()
const port = process.env.PORT || 5000;
const conn ="mongodb://localhost:27017/test";
app.use(express.json())

mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('MongooDB is connected!'))
.catch(err=> console.log('Connection Failed!'))

app.get('/',(req,res)=>{
  res.send("Welcome to appointment booking API!")
})

app.listen(port,()=>{
  console.log(`Example app is listening to app ${port}`);
  
})