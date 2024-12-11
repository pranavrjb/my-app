import express from 'express'
import mongoose from 'mongoose'

const app=express()
const port = process.env.PORT || 5000;
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("Welcome to appointment booking API!")
})

app.listen(port,()=>{
  console.log(`Example app is listening to app ${port}`);
  
})