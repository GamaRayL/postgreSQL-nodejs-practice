import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";

dotenv.config();

const PORT = process.env.PORT || 7070;
const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => console.log(`Server up and running on PORT ${PORT}`));
