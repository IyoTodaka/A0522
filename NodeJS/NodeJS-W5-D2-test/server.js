const express = require('express');
const app = express();

//mongooseはNode.jsからMongoDBを操作するためのライブラリ
//Schema関数もmongooseの中にある
const mongoose = require("mongoose");
const PORT = 8000;

//modelsのThread.jsで定義したThreadスキーマを使うためThreadという名前でインポートする
//(Thread.jsで定義したThreadスキーマはエクスポート済み)
const Thread = require("./models/Thread")



//静的なファイルはpublicフォルダを見に行く
app.use(express.static("public"));

//mongoDBのコネクタタブにあるURLをconnect関数を使って紐づける
//URL内の<password>はDB作成時に設定したDBのPWを入力する
mongoose
    .connect(
        "mongodb+srv://testdb:19882003bB@cluster0.yka27qf.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DBに繋がりました!"))
    .catch((err) => console.log(err));


//getメソッド(自作API)
//クライアント側からリクエストが来た時の動き(DBに何をするのか)を書く
// "/api/v1/threads" URLにアクセスされたらgetメソッドを走らせる
//非同期処理(1つの処理が終わるのを待たずに次の処理を走らせる)で記述するのでasyncを使う
app.get("/api/v1/threads", async(req,res) => {
    try{
        //インポートした関数Threadにmongooseの中にあるfind関数を使いThread内にある全てのデータを取得する
        const allThreads = await Thread.find({});
        res.status(200).json(allThreads);
    }catch(err){
    console.log(err);
    }
});

//POSTメソッド
app.post("/api/v1/thread", async(req,res) => {
    try{
        //インポートした関数Threadにmongooseの中にあるcreate関数を使い新たなデータを登録する
        //クライアント側から来たrequest(req)の中のbody要素の値を登録する
        const createThread = await Thread.create(req.body);
        res.status(200).json(createThread);
    }catch(err){
    console.log(err);
    }
});

app.listen(PORT, console.log('serverに繋がったよ'));