import express from 'express'
import mongoose from 'mongoose'


const app=express()
const port=3002
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/E-commere").then(() => console.log('Ok local DB')).catch((i)=>console.log('errr' ,i))

app.listen(port,()=>{
    console.log('server is running')
}
)