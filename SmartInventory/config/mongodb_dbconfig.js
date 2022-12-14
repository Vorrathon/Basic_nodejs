//import mongodb
const MongoClient = require('mongodb').MongoClient

//Mongodb connection string
// const url = "mongodb://localhost:27017" // no user and password
const url = "mongodb://vorrathon:123456@localhost:27017" //มี user password

var _db
var dbname = "smartinvdb" 

//connect database
const connectDb = (callback) =>{
    if(_db) return callback()
    MongoClient.connect(url,{useNewUrlParser:true},function(err,client){
        if(err) return console.log(err)
        _db = client.db(dbname)
        console.log("Database Connected")
        callback()
    })
}

//อ่าน database
const getDb = ()=>_db

//export fuction
module.exports = {
    connectDb,
    getDb
}