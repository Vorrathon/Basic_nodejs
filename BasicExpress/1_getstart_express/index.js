//import express
const express = require('express')

//import router
const urlRouter = require('./routes/url')

// Create express object
const app = express()

//กำหนดโฟลเดอร์สำหรับบอก express ว่า css,image อยู่ path ไหน
app.use(express.static('assets'))

//เรียก router
app.use('',urlRouter)

//run express server 
app.listen(3000,()=>{
    console.log("Running to port 3000")
}) 