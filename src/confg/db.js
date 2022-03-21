const mongoose = require("mongoose");

const connect = mongoose.connect(
    "mongodb+srv://booksrelation:booksrelation001@cluster0.4xx5z.mongodb.net/minibooksystem?retryWrites=true&w=majority"
);

module.exports = connect;
