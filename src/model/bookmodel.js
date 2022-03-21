

const { default: mongoose } = require("mongoose")



const bookschema = new mongoose.Schema({
    likes: { type: String, default: 0 },
    coverImage: { type: String, required: true },
    content: { type: String, required: true },



}, {
    timestamps: true,
});

const book = mongoose.model("book", bookschema)
module.exports = book