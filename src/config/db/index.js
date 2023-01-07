const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://zingmp3Username:zingmp3Password@zingmp3cluster.esie2lt.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully <3");
  } catch (e) {
    console.log("Connect faile!!!");
  }
}

module.exports = { connect };
