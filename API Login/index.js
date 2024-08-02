const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const http = require("node:http")
const app = express()

app.use(bodyParser.json())
app.use(cors());

//user
const userRoutes = require("./Routes/userRoutes")
app.use("/user", userRoutes)

//servidor
const server = http.createServer(app)
server.listen(9000,()=>{
    console.log("Listening on port 9000")
})

module.exports = app