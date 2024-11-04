import express, { NextFunction, Request, Response } from "express";
import usersRouters from "./routes/users";

const app = express();

app.use('/api/users', usersRouters)

const PORT = 4000;

app.get(
  "/api/users",
  (request: Request, response: Response, next: NextFunction) => {
    response.send([]);
  }
);

app.listen(PORT, () => {
  console.log(`Running on the Port ${PORT}`);
});
