//async_await การทำงานแบบไม่รอการทำงานเป็นลำดับ อันไหนยังไม่เสร็จก็ทำอันอืนรอ

// const f = () => {  // ลงเล็บเปล่า ไม่มีการรับค่า
    
//     console.log("Hello world")
// }
// const f1 = () => {
//     console.log("กำลังโหลด...")
//     setTimeout(() =>{
//     console.log("hello")
//     },3000)
// }

// f()
// f1()

const f = async() =>{
    const promise = new Promise((resolve,reject)=>{
        console.log("กำลังโหลดข้อมูล...")
        setTimeout(()=>{
            resolve("ดาวน์โหลดสำเร็จ")
        },3000)    
    })
    const result = await promise // รอจนครบเวลาจึงได้ค่าออกมา
    console.log(result)
}
f()