
const model = require("../model/bookmodel");


const express = require("express");

const route = express.Router();


route.get("", async (req, res) => {
    try {
        let x = await model.find().lean().exec();
        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }
})

route.patch("", async (req, res) => {
    try {
        let x = await model.findByIdAndUpdate({}, {}).lean().exec();
        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }
})
route.post("", async (req, res) => {
    try {
        let x = await model.create(req.body)
        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }
})
route.delete("", async (req, res) => {
    try {
        let x = await model.findByIdAndDelete().lean().exec();
        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }
})

module.exports = route