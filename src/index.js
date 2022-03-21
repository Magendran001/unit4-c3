const mongoose = require("mongoose");
const express = require("express");

const app = express();
const connect = require("./confg/db")
app.use(express.json())

const usercontroller = require("./controller/usercontroler");
const bookcontroller = require("./controller/bookcontroller");
const commentcontroller = require("./controller/commentcontroler");
const publicationcontroller = require("./controller/publicationcontroler");
const logincontroller = require("./controller/logincontroller")
app.use("user", usercontroller);
app.use("login", logincontroller)
app.use("book", bookcontroller)
app.use("comment", commentcontroller)
app.use("publication", publicationcontroller)

app.listen(3471, async (req, res) => {
    try {
        await connect
        console.log("listening on 3471 port")
    }
    catch (e) {
        console.log(e.message)
    }
})