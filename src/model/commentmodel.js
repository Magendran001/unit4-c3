body(string, required)
timestamps(string, required)



const { default: mongoose } = require("mongoose")



const bookschema = new mongoose.Schema({
    body: { type: String, default: 0 },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }




}, {
    timestamps: true,
});

const book = mongoose.model("book", bookschema)
module.exports = book