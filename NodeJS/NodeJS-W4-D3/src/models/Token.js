const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose

const tokenSchema = new Schema({
    userId : { type: SchemaTypes.ObjectId, required: true, ref: "User" },
    token : { type: String, required: true },
    //expires: 900　で900秒後にトークンの削除を行う
    //トークンはサーバーにアクセスするための割符みたいなもの、ログイン時にレスポンスと一緒にユーザーに
    //返されクッキーの中に保持される
    createdAt : { type: Date, required: true, default: () => Date.now(), expires: 900 }
})

module.exports = model('Token', tokenSchema)