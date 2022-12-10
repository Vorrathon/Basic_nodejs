
// ต้องสร้างไฟล์ package.json เพื่อให้ ไฟล์ javascript สามารถ export import ได้
//import วิธีที่ 1 
import {sayhi,saybye} from './say.js'
sayhi("Vorrathon")
saybye("Vorrathon")

//import วิธีที่ 2 เรียกทั้งหมด
import * as say from './say.js'

say.sayhi("amonteap")
say.saybye("amonteap")


//import วิธีที่ 3 Default
import User from './User.js'

//สร้าง object ก่อนเพราะมี class 
const obj = new User("Vorrathon")
console.log(obj.name)
obj.sayHi()