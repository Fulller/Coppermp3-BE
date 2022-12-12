const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
  fullName: { type: String },
  userName: { type: String },
  password: { type: String },
  avatar: { type: String },
  userPlayList: [
    {
      type: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", Users);
