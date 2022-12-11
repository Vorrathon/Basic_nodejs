//import express
const express = require('express')

//import ejs layouts
const expressLayouts = require('express-ejs-layouts')

//import router frontend.js
const frontendRouter = require('./routes/frontend')

//import express object
const app = express()

//กำหนด Folder สำหรับบอกตัว express ว่า ไฟล์ css , images อยู่ path ไหน
app.use(express.static('assets'))

// กำหนด Template Engine
app.use(expressLayouts)
app.set('layout','./layouts/frontend') // สร้างโฟลเดอร์ layouts สำหรับ frontend
app.set('view engine','ejs') //ใช้ engine ejs

// เรียกใช้งาน Routes
app.use('/',frontendRouter)

//Run express server port 3000
app.listen(5000,()=>{
    console.log('Server runing at port 5000')
})