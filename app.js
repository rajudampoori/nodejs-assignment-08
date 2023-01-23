
const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")

const app = express();
const routes = require("./src/routers/routes")
const cors = require("cors")
mongoose.connect("mongodb://localhost:27017/signuplogin").then(()=> {console.log("connected to db")})
.catch((error)=> {console.log(error)})
app.use(bodyparser.json())

app.use(cors())
app.use(express.json())
app.use("/",routes)
app.get("/",(req,res)=> {
res.send("ok")
})

app.listen("8000",()=> {console.log("Server is up at 8000")})