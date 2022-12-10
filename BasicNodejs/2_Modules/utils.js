//การสร้าง Modules

const calculateVat = (money,vat) =>{
   return money*vat/100
}
const sayHello =()=>console.log("Hello")
module.exports={calculateVat,sayHello} // การ export แบบ nodejs ต้องพิมพ์ module.exports = ไม่ต้องสร้าง package.json