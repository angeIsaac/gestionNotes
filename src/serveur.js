import {creatApp} from "./creatApp.js";
import { configs } from "./utils/config.js";
import { connection } from "./db/connection.js";


const app = creatApp();
const port = configs.PORT || 3000;

app.listen(port, async () => {
    await connection();
    console.log(`Listening on port ${port}`)
});