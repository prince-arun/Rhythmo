const mongoose = require("mongoose");

//creating schema for registration-api
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    playlists: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

//exporting model
module.exports = mongoose.model("user", userSchema);
