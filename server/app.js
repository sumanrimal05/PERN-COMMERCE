import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";

const app = express();

app.set("trust proxy", 1);
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1 style='text-align:center'>E-COMMERCE API</h1>");
});

export default app;
