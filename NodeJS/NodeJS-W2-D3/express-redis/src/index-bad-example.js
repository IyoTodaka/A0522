const express = require("express");
const app = express();
const axios = require("axios");
const redis = require("redis").createClient();

const API_URL = "http://numbersapi.com";

redis.on("connect", () => console.log("Connected to Redis"));
redis.on("error", (err) => console.log("Redis Client Error :", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/number/:num", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/${req.params.num}`);
    console.log("Retrieved from external API");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/cached-number/:num", async (req, res) => {
    const triviaNumber = req.params.num
  try {
    await redis.connect();
    const cachedNumber = await redis.get(triviaNumber);

    if (cachedNumber) {
      console.log("Retrieved from cache");
      return res.status(200).json(cachedNumber);
    } else {
      const { data } = await axios.get(`${API_URL}/${triviaNumber}`);
      await redis.set(triviaNumber, data);
      console.log("Retrieved from the API");
      res.status(200).json(data);
    }

    await redis.quit();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(8080);
