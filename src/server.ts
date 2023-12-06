import "express-async-errors";
import express from "express";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (
    err: Error,
    request: express.Request,
    response: express.Response,
    _next: express.NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(400).json({
        status: "error",
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3001, () => console.log("Server is running!"));
