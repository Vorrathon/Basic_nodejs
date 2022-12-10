//import express
const express = require('express')

//Create rountes
const router = express.Router()

//Create routing method
//อ่านหน้าแรก
router.get('/',(req,res)=>{ //get อ่านข้อความแบบแสดงผลตรงๆ
    // res.send('<h1>Hello Express</h1>') //อ่านข้อความ
    res.render('pages/index.ejs') // อ่านไฟล์ ejs ไม่ต้องระบุpath views เพราะมันคือค่าเริ่มต้น
})
//อ่านหน้า about
router.get('/about',(req,res)=>{ 
    res.render('pages/about.ejs') 
})




router.get('/api/user/:id',(req,res)=>{ //รับ id เข้ามาเพื่อโชว์ id ที่เรากรอกบน url
    res.send(`Hello userID:${req.params.id}`)  
})
router.post('/api',(req,res)=>{ //post อ่านข้อความแบบแสดงผลแบบลับๆ
    // res.send('POST API')
    res.json({name:'vorrahon',email:'neofreedom2539@gmail.com'}) //ตอบกลับแบบ json
})

module.exports = router