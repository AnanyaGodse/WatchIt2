const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "Users",
  }
);
mongoose.model("Users", UserDetailsSchema);
