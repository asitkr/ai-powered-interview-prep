import "dotenv/config";

import app from "./app.js";
import { connectDb } from "./lib/db.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on Port number ${PORT}`);
    connectDb();
});
