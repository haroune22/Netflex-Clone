const express= require("express")
const app = express()
const apiRoutes = require("./Routes/Index");
require('dotenv').config()
require ("./Config/db").connect();
const PORT = process.env.PORT;
const cors = require("cors")



app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174"
]
}));

app.use(express.json())
app.use("/api",apiRoutes())


app.listen(PORT,()=>{
    console.log(`backend started at ${PORT}`)
})