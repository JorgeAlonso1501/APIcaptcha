const express = require("express")
const { Router } = express
const mongoose = require("mongoose")
const addressModelCreator = require("../base/User")
const routes = Router()

//obtener datos guardados
routes.get("/", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/captcha")
    try {
        const addressModel = addressModelCreator(connection)
        const data = await addressModel.get()
        res.json(data)
        connection.close()
    } catch(error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't get data", error: error })
    }
})

//agregar dato
routes.post("/", async (req, res) => {
    const connection = await mongoose.createConnection("mongodb://127.0.0.1:27017/captcha")
    try {
        const addressModel = addressModelCreator(connection)
        const address = new addressModel(req.body)
        const data = await address.save()
        res.json(data)
        connection.close()
    } catch (error) {
        connection.close()
        res.status(500)
        res.json({ message: "Couldn't add data", guardarError: error })
    }
})


module.exports = routes