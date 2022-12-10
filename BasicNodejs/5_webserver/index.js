// import https modules ไว้สร้าง web server
const http = require('http')
//import path Html
const path = require('path')
//import file modules
const fs = require('fs')


const getPage = (page)=>{
    const filePath = path.join(__dirname,page) //ระบุ path ที่อยู่ปัจจุบัน
    return fs.readFileSync(filePath) // ส่งค่าไปให้อ่าน
}

//create server สร้าง server
http.createServer((req,res)=>{
    const fileType = path.extname(req.url) || '.html' // เช็ตค่าไฟล์เริ่มต้นเป็นไฟล์ HTMl

    if(fileType ==='.html'){  
        res.setHeader('Content-Type','text/html') //ระบุ content เองเช่น html 
        //สร้างเงื่อนไขกำหนด URL เพื่อให้สามารถอ่านไฟล์ได้ถูกหน้า
        if(req.url ==='/'){
            res.write(getPage('index.html'))
        }else if(req.url ==='/about'){
            res.write(getPage('about.html'))
        }
        res.end()//ประกาศจบ process
    }else if(fileType ==='.css'){
        res.setHeader('Content-Type','text/css') //ระบุ content เองเช่น html 
        res.write(getPage('style.css'))
        res.end()
    }
    
}).listen(3000) // ระบุ port 


