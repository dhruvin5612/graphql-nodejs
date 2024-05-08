const client = require('./client');

async function init(){
    // await client.lpush("msg", 1);
    // await client.lpush("msg", 2);
    // await client.lpush("msg", 3);
    console.log("DEBUG CODE", await client.lrange('msg', 0, -1)) // full list
}
init()