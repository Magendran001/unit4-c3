
timestamps(string, required)
const { default: mongoose } = require("mongoose")



const publicationschema = new mongoose.Schema({
    name: { type: String, required: true },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true }



}, {
    timestamps: true,
});

const publication = mongoose.model("publication", publicationschema);
module.exports = publication