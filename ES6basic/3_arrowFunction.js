//ES5
// function showHello(name,message){
//     return name+message 
// }
// console.log(showHello('Vorrathon ','Kedpratoom'))

//เขียนแบบ first class function สร้างตัวแปรเพื่อเก็บ function

// const showHello = function(name,message){  
//     return name+message
// }
// console.log(showHello("vorrathon ","kedpratoom"))


// //เขียนแบบ Arrow ES6 เขียนแบบย่อกรณี return ตัวเดียว
// const showHelloArrow = (age,city) => age+city
// console.log(showHelloArrow(26," kamphaeng_Phet"))

// //ลดรูปได้อีก กรณีรับ ค่าเพียงค่าเดียว
// const showHelloArrow2 = (city) => city
// console.log(showHelloArrow2("Bankkok"))


//โจทย์
function sayHi(name){
    const result = 'Hello' + name
    return result
}
console.log(sayHi(" Vorrathon"))


//ตอบแบบ ES6
const sayHi1 = name => {
    return "hello "+name
}
console.log(sayHi1("Vorrathon"))
