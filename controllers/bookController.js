const bookModel = require("../models/book")


exports.getAllBooks = async function(req,res) {
  try {
    const Books = await bookModel.find()
    return res.json({"message": "Done", data: Books})
  } catch (err) {
    return res.status(400).send({message : err})
  }
}

exports.getOneBook = async function(req,res) {
  try {
    const Book = await bookModel.find({_id: req.params.id})
    // Book (Array)
    if (Book.length === 0) {
      return res.json({"message": "Book Not Found", data: Book})
    } else {
      return res.json({"message": "Done", data: Book})
    }
  } catch (err) {
    return res.status(400).send({message : err})
  }
}

exports.addNewBook = async function(req,res) {
  try {
    // admin only
    if (req.user.role === "admin") {
      const CreateBook = await bookModel.create(req.body)
      return res.json({ message: "Book Added Successfuly", data: CreateBook})
    } else {
      return res.status(403).send({ message: "Your Dont,t Have the right permssion"})
    }

  } catch (err) {
    return res.status(400).send({message : err})
  }
}

exports.deleteBook = async function(req,res) {
  try {
    if (req.user.role === "admin") {
      await bookModel.findByIdAndDelete(req.params.id)
      return res.json({ message: "Book Delete", data:[]})
    } else {
      return res.status(403).send({ message: "Your Dont,t Have the right permssion"})
    }

  } catch (err) {
    return res.status(400).send({message : err})
  }
}

exports.updateBook = async function(req,res) {
  try {
    if (req.user.role === "admin")  {
      await bookModel.findByIdAndUpdate(req.params.id, req.body);
      return res.json({ message: "Book Update", data:[]})
    } else {
      return res.status(403).send({ message: "Your Dont,t Have the right permssion"})
    }
  } catch (err) {
    return res.status(400).send({message : err})
  }
}

