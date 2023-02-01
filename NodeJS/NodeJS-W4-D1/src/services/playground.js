require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb')

const url = process.env.MONGO_URL;
MongoClient.connect(url).then(async (dbObject) => {

    const dbo = dbObject.db('aaaaaaa-test')

    //Create Collections
    // dbo.createCollection('people', (err, res) => {
    //     if(err) throw err;
    //     console.log("Collection created");
    //     dbObject.close()
    // })

    //Insert a single data into collection
    // const myObject = { name: "Hoge", email: "hoge@hoge.com" }
    // dbo.collection('people').insertOne(myObject)

    //Insert multiple data into collection
    // const myObjects = [
    //     { name: "Hoge1", email: "hoge@hoge.com" },
    //     { name: "Hoge2", email: "hoge@hoge.com" },
    //     { name: "Hoge3", email: "hoge@hoge.com" },
    //     { name: "Hoge4", email: "hoge@hoge.com" },
    // ]
    // dbo.collection('people').insertMany(myObjects)

    //find one
    // const idToFind = new ObjectId('63d994b3bf70894de8abeead')
    // const found = await dbo.collection('people').findOne({ _id: idToFind })
    // console.log(found);

    //find all
    // const foundAll = await dbo.collection('people').find({}).toArray()
    // console.log(foundAll);


    //filter the result
    // const query = { email: "hoge@hoge.com" }
    // const foundWithFilter = await dbo.collection('people').find(query).toArray()
    // console.log(foundWithFilter);


}).catch(err => console.error('Error in mongo connect: ', err))