// แบบ ES6 การเข้าถึง array
const scores = [55,66,44] 
const[s1,s2] = scores 
console.log(s1,s2)


//last element หา arrayตัวสุดท้าย
const {[scores.length-1]:last} = scores // length-1 คือการหา array ตัวสุดท้าย เก็บไว้ในตัวแปร last
console.log(last)



// แบบ ES6 การเข้าถึง Object

const player1 ={
    name : "RONAN",
    club : "MANU"
}
const player2 ={
    name : "messi",
    club : "barcelona"
}

console.log(player1.name,player2.name)