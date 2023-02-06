const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bcrypt = require('bcryptjs')
const {salt} = require("../config")

const userSchema = new Schema({
    name : { type: String, trim: true, required: true },
    email : { type: String, trim: true, required: true, unique: true },
    password : { type: String }
}, {
    timestamps: true,
})

//mongoose.Schemaの中にpre・next・isModified関数がある
//pre 第一引数に書かれている命令の前に第二引数の処理を実行させる
//next() 次の処理へ進ませる↓の場合はnext()すると"save"が実行される
//isModified 変更されたかどうか↓はパスワードが変更されていなければnext()を返す(次の処理に進む)
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    //bcryptの中にあるhashとsaltを使ってPWを暗号化させる
    //hash 第一引数に暗号化したい文字、第二引数にハッシュ化させる回数もしくはオプション(saltとか)
    //saltは回数ではなくランダムに生成された値、PWに追加する事でより解読を困難にする
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

module.exports = model('User', userSchema)