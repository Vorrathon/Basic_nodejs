//import express
const express = require('express')

//่import express-flash
const flash = require('express-flash')

//import express-session
const session = require('express-session')

//import ejs layouts
const expressLayouts = require('express-ejs-layouts')

//import router frontend.js
const frontendRouter = require('./routes/frontend')
//import router backend.js
const backendRouter = require('./routes/backend')

//import express object
const app = express()

//กำหนด Folder สำหรับบอกตัว express ว่า ไฟล์ css , images อยู่ path ไหน
app.use(express.static('assets'))

// กำหนด Template Engine
app.use(expressLayouts)
app.set('layout','./layouts/frontend') // สร้างโฟลเดอร์ layouts สำหรับ frontend
app.set('view engine','ejs') //ใช้ engine ejs

//กำหนดค่าให้สามารถ รับค่าจาก Form
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//เรียกใช้งาน express-session
app.use(session({
    cookie:{maxAge:60000},
    store: new session.MemoryStore,
    saveUninitialized:true,
    resave:'true',
    secret: 'secret'
}))

//เรียกใช้งาน express-flash
app.use(flash())

// เรียกใช้งาน Routesfontend
app.use('/',frontendRouter)
// เรียกใช้งาน Routesbackend
app.use('/backend',backendRouter)

//Run express server port 3000
app.listen(5000,()=>{
    console.log('Server runing at port 5000')
})