const express = require("express");
const app = express();
const redis = require("redis").createClient();

redis.on("ready", function(){
    console.log("Redis is ready");
})

const redisTest = async () => {
    await redis.connect();

    //string
    await redis.set("thisisakey", "thisisavalue");
    const value = await redis.get("thisisakey");
    console.log(value);

    //list
    const listCount = await redis.rPush("thisisalist", ["item1", "item2", "item3"]);
    console.log(listCount);

    const list = await redis.lRange("thisisalist", 0, -1);
    console.log(list)

    //Set
    await redis.sAdd("thisisaset", "Apple");
    await redis.sAdd("thisisaset", "Banana");
    await redis.sAdd("thisisaset", "Banana");
    await redis.sAdd("thisisaset", "Orange");

    const set = await redis.sMembers("thisisaset");
    console.log(set);

    //HashSet
    await redis.hSet("thisisahashset", "key1", "value1");
    await redis.hSet("thisisahashset", "key1", "value1");
    const hashSetList = await redis.hGetAll("thisisahashset");
    console.log(hashSetList);

    await redis.del("thisisakey");
    await redis.del("thisisalist");
    await redis.del("thisisaset");
    await redis.del("thisisahashset");

    console.log(">>>>>>>>>>>>>");
    console.log(await redis.get("thisisakey"));
    console.log(await redis.get("thisisalist"));
    console.log(await redis.get("thisisaset"));
    console.log(await redis.get("thisisahashset"));
}

redisTest();

app.listen(8080);