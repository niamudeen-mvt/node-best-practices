import "dotenv/config";
import express from "express";
import cors from "cors";
import colors from "colors";
import connectToDatabase from "./config/db.js";
import router from "./router/index.js";
import { errorHandler } from "./utils/helper.js";

connectToDatabase();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});

app.use("/api/v1", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`.bgBlue);
});
