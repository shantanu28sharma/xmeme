import express from "express";
import createHttpError from "http-errors";
import logger from "morgan";
import * as bodyParser from "body-parser";
import routes from "./routes";
import config from "./configs";
import { sync } from "./utils/postgres";
import http from 'http';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

async function startServer() {
  const app = express();
  app.use(logger("dev"));
  app.use(
    bodyParser.json({
      limit: "50mb",
      verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
      },
    })
  );
  app.use(cors());
  app.use("/", routes);
  await sync();
  http.createServer(app).listen(config.port);
}

async function startSwaggerServer() {
  const app = express();
  const swaggerDoc = require('../swagger/doc.json');
  app.use(
    "/swagger-ui",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc)
  );
  http.createServer(app).listen(config.swaggerport);
}

startServer();
startSwaggerServer();
