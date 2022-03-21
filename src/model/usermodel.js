const { default: mongoose } = require("mongoose")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


const userschema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    profileImages: [{ type: String, required: true }],
    password: { required: true, type: String }


}, {
    timestamps: true,
});
userschema.pre('save', function () {

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(this, salt, function (err, hash) {

            this.password = hash;
        });
    });
});


const user = mongoose.model("user", userschema);
module.exports = user