
const model = require("../model/bookmodel");


const express = require("express");

const route = express.Router();


const { body, validationResult } = require('express-validator');

route.post("", body('coverImage').notEmpty(), body('content').notEmpty(), async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let x = await model.create(req.body)
        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }
})
route.get("", async (req, res) => {
    try {

        let limit = req.query.limit || 15;
        let page = req.query.page || 1;

        page = (page - 1 * limit);

        let x = await model.find().skip(page).limit(limit).lean().exec();



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