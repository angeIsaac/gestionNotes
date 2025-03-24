import { createClient } from "redis";

const client =  createClient();
client.on("error", (err) => {console.log("Error: ", err)});
await client.connect();
