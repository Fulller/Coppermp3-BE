let db = require("../config/db");
const User = require("../modules/User");
const multer = require("multer");
const { port } = require("../config");
const { findOne } = require("../modules/User");
console.log("Day la port", port);

let register = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      let findUser = await User.findOne({ userName: body.userName });
      if (findUser) {
        result.isSuccessful = false;
        result.massage = "Account already exists";
      } else {
        await User.create({
          userName: body.userName,
          fullName: body.fullName,
          password: body.password,
          userPlayList: body.userPlayList,
          avatar: `http://localhost:${port}/images/defaultAvatar.jpg`,
        });
        result.isSuccessful = true;
        result.massage = "Create account success";
      }
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      result.massage = "Account creation failed";
      reject(result);
    }
  });
};
let login = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      let data = await User.findOne({ userName: body.userName });
      if (data) {
        if (data.password == body.password) {
          result.isSuccessful = true;
          result.massage = "Logged in successfully";
          result.user = data;
        } else {
          result.isSuccessful = false;
          result.massage = "Wrong password";
        }
      } else {
        result.isSuccessful = false;
        result.massage = "User not found";
      }
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      result.massage = "Login failed";
      reject(result);
    }
  });
};
let deleteAccount = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      isSuccessful: 10,
      message: "Cant't delete account note!",
    };
    try {
      // let data = await User.findById(body.id);
      let data = await User.findOne({ userName: body.userName });
      if (data) {
        await data.remove();
        result.isSuccessful = true;
        result.message = "Account deleted successfully";
      } else {
        result.isSuccessful = false;
        result.message = "Account does not exist";
      }
      resole(result);
    } catch (e) {
      reject(result);
    }
  });
};
module.exports = {
  register,
  login,
  deleteAccount,
};
