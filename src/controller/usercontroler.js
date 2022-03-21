
const model = require("../model/bookmodel");


const express = require("express");

const route = express.Router();

const { body, validationResult } = require('express-validator');




route.post("", body('profileImages').notEmpty(), body('email').isEmail(), body('age').isLength({ min: 1, max: 150 }), body('firstName').isLength({ min: 3, max: 30 }), async (req, res) => {
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