const express = require("express");
const axios = require("axios");
const redis = require("redis");

const API_URL = "http://numbersapi.com";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let redisClient;
//redis to automically connect
(async() => {
  redisClient = redis.createClient();
  
  redisClient.on("error", (err) => console.error("Error:", err));
  
  await redisClient.connect();

})() //IIFE

async function fetchApiData(number){
  const apiResponse = await axios.get(`${API_URL}/${number}`);
  return apiResponse.data;
}

async function cacheData(req,res,next){
  const number = req.params.num;
  let results;

  try {
    const cacheResult = await redisClient.get(number);

    if(cacheResult){
      results = cacheResult;
      return res.status(200).json({ fromCache: true, results })
    }else{
      next();
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

}

async function getNumbers(req,res,next){
  const number = req.params.num;
  let results;

  try{
    results = await fetchApiData(number)
    
    if(results.length === 0){
      throw "API return an empty array,"
    }

    await redisClient.set(number, results, {
      EX: 3,
      NX: true
    });

    res.status(200).json({ fromCache: false, results })
  }catch(err){
    res.status(500).json({message: err.message});
  }
}


app.get("/number/:num", cacheData, getNumbers)



app.listen(8080);
