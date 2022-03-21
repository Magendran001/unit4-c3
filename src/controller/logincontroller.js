
const model = require("../model/bookmodel");


const express = require("express");

const route = express.Router();

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');




route.post("", body('password').notEmpty(), body('email').isEmail(), async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = model.find({ firstName: req.body.email }).lean().exec();

        if (!user) {
            return res.send({ message: "No user found ,first you have to regeister" })
        }

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.send("password not match")
            }
            else if (match) {

                return res.send(user)
            }
        }


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