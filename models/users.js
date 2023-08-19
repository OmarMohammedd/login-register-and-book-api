const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String, 
  email:{type: String, unique:true},
  password:String,
  phone: {type: String, unique:true},
  role: { type: String, default: "user"} // User - Admin
})

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("Userss", userSchema)