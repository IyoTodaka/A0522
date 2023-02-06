const mongoose = require('mongoose')

//DB接続 mongoDBのDatebase-Connect to Cluster0のconnect your appのURLをコピーして貼る
//URLの一部にはPWを入力する、URL自体は.envで管理する
const connect = mongoose.connect(process.env.MONGODB_URI)
connect.then(() => console.log("Connected to DB")).catch(err => console.error(err))