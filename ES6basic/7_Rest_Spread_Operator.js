//Spread ... การเติมสมาชิก array ตัวอื่นใน array อีกตัว

const arr = [4,5,53,536,3434]
const myname = ["vorrathon",...arr] 
console.log(myname)

//Rest Parameter ...args คือการรับ Parameter ใน fucntion กี่ตัวก็ได้
const HowmanyAgrs = (...args)=> {
     console.log(args.length)
     console.log(args)        
}
HowmanyAgrs(10)
HowmanyAgrs(`vorrathon kedpratoom age`,26 )
HowmanyAgrs(true,false,"LINE")


//Excercise
const multiply=(multiplier,...array)=>{
    console.log(array)
    return array.map(e=>multiplier*e) } // array.map คือการนำเอา parameter * กับ array 
console.log(multiply(2,10,20,30))
