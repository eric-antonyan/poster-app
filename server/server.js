import app from "./assets/app.js";
import dotenv from "dotenv";
import colors from "colors"
import mongoose from "mongoose"
dotenv.config();

const { PORT, MONGO_DB } = process.env;

(async () => {
  if (!PORT || !MONGO_DB) {
    console.log(colors.red("Please check you envioment variables or try"), colors.bgYellow(colors.italic("npm install dotenv")))
  } else {
    await mongoose.connect(MONGO_DB)
    app.listen(PORT, () => {
      console.log(colors.green(`Server listening on host http://localhost:${PORT}`));
    })
  }
})()
