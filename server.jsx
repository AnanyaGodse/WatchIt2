const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "xsuhkqwo9123";

const mongoURL =
  "mongodb+srv://ananyaagodse:Mongo%401123@ananya.bcckbvc.mongodb.net/?retryWrites=true&w=majority";

app.listen(5173, () => {
  console.log("Server started");
});

mongoose
  .connect(mongoURL, { dbName: "Login" })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => console.log(e));

require("./UserDetails.jsx");

const User = mongoose.model("Users");
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const encryptPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send("error: User exists");
    }
    await User.create({
      email: email,
      password: encryptPassword,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User does not exist" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    if (res.statusCode === 201) {
      return res.json({ status: "OK", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  return res.json({ status: "error", error: "invalid password" });
});
