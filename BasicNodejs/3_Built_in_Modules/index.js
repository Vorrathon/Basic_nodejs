//Node.js Built-in Modules
// 1.File FileSystem(fs)
// 2.Path(path)
// 3.Operating FileSystem(os)
// 4.HTTP(http)

//Path
// const path = require('path')
// console.log(path.basename(__filename)) // อ่านชื่อไฟล์ที่กำลังรันอยู่
// console.log(path.dirname(__filename)) // ดูที่อยู่ไฟล์ หรือ directory ของไฟล์ที่กำลังทำงานอยู่
// console.log(path.extname(__filename)) // ดูนามสกุลไฟล์ที่ทำงานอยู่
// console.log(path.parse(__filename)) // จะดูข้อมูลทุกอย่างของไฟล์ที่ทำงาน แบบ object 
// console.log(path.parse(__filename).name)  // ดูข้อมูลแบบเจาะจง เช่น .name ดูแค่ชื่อไฟล์

// //File system การอ่าน เขียนไฟล์
// const fs = require('fs') // เรียกใช้งาน File system
// const path = require('path')

//  // สร้างไฟล์ใหม่ด้วย modules fs
// fs.writeFileSync(path.join(__dirname,"data.txt"),"Hello Vorrathon นาย วรธน") //การสร้างไฟล์ data.txt ต่อจาก path ปัจจุบัน โดยใช้คำสั่ง join

// // อ่านไฟล์
// console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8')) //อ่านข้อความจากไฟล์ data.txt กรณีไฟล์มีภาษาไทยให้ใส่ utf8

// Operating system (os) //ดู windows cpu 
const os = require('os')
console.log(os.cpus()) //ดู CPU ความแรง จำนวน core
console.log(os.hostname()) //ดูชื่อคอมพิวเตอร์
console.log(os.homedir())  // ดูชื่้อ user
console.log(os.uptime())  //ดูเวลาที่ใช้งานเครื่อง
console.log(os.platform())  // ดู win 32
console.log(os.release())  //รุ้น windows
console.log(os.arch())  //ดู 64 bit
console.log(os.type())  
console.log(os.loadavg())  
console.log(os.networkInterfaces())  //ดู IP ภาพรวม