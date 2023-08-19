const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const userRouter = require("./routes/userRouter")
const bookRouter = require("./routes/book")


const app = express()

// body-parser == بتحول اي ريكوست الي ملف جسون
app.use(bodyparser.json())
const url = 


mongoose
  .connect(
    "mongodb+srv://omar:omar@cluster0.f9ottjh.mongodb.net/login-register?retryWrites=true&w=majority")
  .then((result) => {
    app.listen(5000, () => {
      console.log(`http://localhost:5000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Router
app.use("/", userRouter)
app.use("/", bookRouter)


// auto refreash
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 
