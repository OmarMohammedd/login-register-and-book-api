const userModel = require("../models/users")
const bcrypt = require("bcryptjs")
// jwt === حاجه ببعتها للفرونت وبيبعتهالي تاني مع api 
// مش هسمح لاي api 
// البطاقه
const jwt = require("jsonwebtoken")


exports.register = async function(req,res) {
  try {
    let newUser = new userModel(req.body)
    // 10 == هيعمل هاش 10 مرات ورا بعض
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    newUser.password = hashedPassword
    let user = await newUser.save()
    return res.json({ message: "User Registerd Succesfully", user:{ name: user.name, email: user.email, id: user._id }})
  } catch (err) {
    return res.status(400).send({message : err})
  }
}

exports.login = async function(req,res) {
  try {
    let user = await userModel.findOne({email: req.body.email})
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: "Authntication failed, Invalid username or password"})
    }
    // token
    // await === استنا لما تخلص مينفعش تعدي من غيرها 
    const token = jwt.sign({ name:user.name, email:user.email, id:user._id, role:user.role }, "secuirtkey")
    return res.json({ message: "User logged in Succesfully", user:{token:token}} )

  } catch (err) {
    return res.status(400).send({message : err})
  }
}