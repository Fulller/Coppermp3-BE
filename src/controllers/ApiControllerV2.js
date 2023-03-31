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
async function getSong(req, res) {
  let data = await services.getSong(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getDetailPlaylist(req, res) {
  let data = await services.getDetailPlaylist(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getHome(req, res) {
  let data = await services.getHome(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getTop100(req, res) {
  let data = await services.getTop100(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getChartHome(req, res) {
  let data = await services.getChartHome(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getNewReleaseChart(req, res) {
  let data = await services.getNewReleaseChart(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getInfoSong(req, res) {
  let data = await services.getInfoSong(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getArtist(req, res) {
  let data = await services.getArtist(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getListArtistSong(req, res) {
  let data = await services.getListArtistSong(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getLyric(req, res) {
  let data = await services.getLyric(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function search(req, res) {
  let data = await services.search(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getListMV(req, res) {
  let data = await services.getListMV(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getCategoryMV(req, res) {
  let data = await services.getCategoryMV(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getVideo(req, res) {
  let data = await services.getVideo(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function updateUser(req, res) {
  let data = await services.updateUser(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function adduserfb(req, res) {
  let data = await services.adduserfb(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
async function getalluserfb(req, res) {
  let data = await services.getalluserfb(req.query);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      isSuccessful: false,
    });
  }
}
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
  getCategoryMV,
  getListArtistSong,
  getLyric,
  search,
  getListMV,
  getListMV,
  getVideo,
  updateUser,
  adduserfb,
  getalluserfb,
};
