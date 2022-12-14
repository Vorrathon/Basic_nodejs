//import express
const express = require('express')
const router = express.Router()

//import momentjs จัดการวันที่และเวลา
const moment = require('moment')

//import mongodb_dbconfig
const {connectDb,getDb} = require('../config/mongodb_dbconfig')
var db
connectDb(()=>(db = getDb()))



router.get('',(req,res)=>{
    res.render(
    'pages/backend/dashboard',
    {
        title:'Dashboard',
        heading:'Dashbord',
        layout:'./layouts/backend'
    }
    )
})

//CRUD Category
//Read Category
router.get('/category',async(req,res)=>{
    const category = await db.collection('category').find({}).toArray()
    // res.json(category)

    res.render(
    'pages/backend/category',
    {
        title:'Category',
        heading:'Category',
        layout:'./layouts/backend',
        data: category,
        moment:moment
    }
    )
})

// Create category
router.get('/create_category',(req,res)=>{
    res.render(
    'pages/backend/create_category',
    {
        title:'Create Category',
        heading:'Create Category',
        layout:'./layouts/backend'
    }
    )
})

// Create category POST
router.post('/create_category',async (req,res)=>{
    //รับค่าจาก Form
    const CategoryID = req.body.CategoryID
    const CategoryName = req.body.CategoryName
    const CategoryStatus = req.body.CategoryStatus
    const Current_Date_Time = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
// console.log(CategoryID+CategoryName+CategoryStatus)

// Validate Form ว่ากรอกข้อมูลครบไหม
if(CategoryID === '' || CategoryName.lenght === 0 || CategoryStatus === '')
    {
        errors = true
        // แสดงข้อความเตือน
        req.flash('error','ป้อนข้อมูลให้ครบ')
        // ให้ทำการรีโหลด Form เพิ่มมาใหม่
        res.render(
            'pages/backend/create_category',
            {
                title:'Create Category',
                heading:'Create Category',
                layout:'./layouts/backend'
            }
            )
    }
else{
//Insert to mongodb
await db.collection('category').insertOne({

    CategoryID: parseInt(CategoryID),
    CategoryName: CategoryName,
    CategoryStatus: parseInt(CategoryStatus),
    CreateDate: Current_Date_Time,
    ModifiedDate: Current_Date_Time
})
    // แสดงข้อความเตือน
    req.flash('success','เพิ่มหมวดหมู่สินค้าเรียบร้อยแล้ว')
    res.render(
    'pages/backend/create_category',
    {
        title:'Create Category',
        heading:'Create Category',
        layout:'./layouts/backend'
    }
    )
    }
})


// Edit category
router.get('/edit_category',(req,res)=>{
    res.render(
    'pages/backend/edit_category',
    {
        title:'Edit Category',
        heading:'Edit Category',
        layout:'./layouts/backend'
    }
    )
})
router.get('/products',(req,res)=>{
    res.render(
    'pages/backend/products',
    {
        title:'Products',
        heading:'Products',
        layout:'./layouts/backend'
    }
    )
})
// create products
router.get('/create_product',(req,res)=>{
    res.render(
    'pages/backend/create_product',
    {
        title:'Create Product',
        heading:'Create Product',
        layout:'./layouts/backend'
    }
    )
})
// Edit products
router.get('/edit_product',(req,res)=>{
    res.render(
    'pages/backend/edit_product',
    {
        title:'Edit Product',
        heading:'Edit Product',
        layout:'./layouts/backend'
    }
    )
})

module.exports = router