import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'
import cors from 'cors'

const app=express()
const port = 3000;
const conn ="mongodb://localhost:27017/";

app.use(express.json())
app.use(cors())
app.use('/auth', authRoutes)


mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('MongooDB is connected!'))
.catch(err=> console.log('Connection Failed!'))

app.get('/',(req,res)=>{
  res.send("Welcome to appointment booking API!")
})

app.listen(port,()=>{
  console.log(`Example app is listening to app ${port}`);
  
})