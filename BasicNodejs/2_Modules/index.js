// เรียกใช้งาน utils แบบที่1
const utils = require('./utils') //nodeใช้ ไฟล์ พิมพ์ require('./utils') ไม่ต้องใส่ .js

// เรียกใช้งาน utils แบบที่2นิยมใช้มากกว่า
const {calculateVat,sayHello} = require('./utils') //destructuring


utils.sayHello()
const vat = utils.calculateVat(2,7)
console.log(vat)

//เรียกใช้งานแบบ 2 นิยมใช้มากกว่า
sayHello()
const vat1 =calculateVat(300,7)
console.log(vat1)