import { configDotenv } from "dotenv";
configDotenv();

import express from "express";

import cors from "cors";

import router from "./routes/user.routes.js";

const app = express();

app.use(cors(process.env.CORS_OPTIONS));
app.use(express.json());



app.use("/api/movies", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});