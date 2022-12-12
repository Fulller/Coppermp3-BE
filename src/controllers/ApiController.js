const Users = require("../modules/User");
const services = require("../services");

async function register(req, res) {
  let data = await services.register(req.body);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
      massage: "Account creation failed",
    });
  }
}
async function login(req, res) {
  let data = await services.login(req.body);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
      massage: "Login failed",
    });
  }
}
async function deleteAccount(req, res) {
  let data = await services.deleteAccount(req.body);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
      massage: "Can't delete account",
    });
  }
}
module.exports = {
  register,
  login,
  deleteAccount,
};
