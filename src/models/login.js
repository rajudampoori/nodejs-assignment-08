// const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
// const keysecret = "RESTAPI"

// const loginSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     tokens: [{ token: { type: String, required: true } }]
// })

// loginSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         this.password = bcrypt.hash(this.password, 12)
//     }
//     next()
// })

// loginSchema.methods.generateAuthToken = async function () {
//     try {
//         const myToken = jwt.sign({ _id: this._id }, keysecret, { expiresIn: "1d" })
//         this.tokens = this.tokens.concat({ token: myToken })
//         await this.save()
//         return myToken
//     } catch (error) {
//         res.json(error)
//     }
// }

// const LogIn = mongoose.model("LogIn", loginSchema)

// module.exports = LogIn;