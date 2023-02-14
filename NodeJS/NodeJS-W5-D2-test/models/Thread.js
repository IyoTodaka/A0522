//スキーマを定義するためにmongoose(mongoose.Schema関数を使う)をインポートする
const mongoose = require("mongoose"); 

//スキーマ(データの定義)をJSON形式で定義する
const ThreadSchema = new mongoose.Schema({
    title:{
        type: String,
        //requiredは必須flag、trueにすると必須項目になる
        required:true,
        //前後のスペースを削除する
        trim: true,
        maxlength:20,
    },
    content:{
        type: String,
        required: true,

    },
});

//この定義を他でも使いたい(server.jsでも使いたい)のでThreadという名前でexportする
module.exports = mongoose.model("Thread" , ThreadSchema);