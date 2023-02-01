require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URL, dbName = 'a0522'

exports.mongoConnect = async () => {
    const dbo = await MongoClient.connect(url)
    return dbo.db(dbName)
}