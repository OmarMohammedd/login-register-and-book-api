const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {
  try {
    // req.headers == معلومات عن الريكويست زي status(200)
    const fullToken = req.headers.authorization
    // ? === لو التوكن موجوده زي قاعده اف بالظبط
    const token = fullToken?.split(' ')[1]
     if (!token) return res.status(403).send("Access Denied")
     // علشان لو بعت اي حاجه ميشتغلش
     let user = jwt.verify(token, "secuirtkey")
     // هيزود علي الريكوست اليوزر
     req.user = user
     next()
  } catch (err) {
    res.status(400).send("Invalid JWT")
  }
} 