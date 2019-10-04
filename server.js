const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const actionRoutes = require("./data/expressRouters/actionModel");
const projectRoutes = require("./data/expressRouters/projectModel");

const server = express();

function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`There was a ${method} on ${url}`);
  next();
}

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(logger);
server.use("/action", actionRoutes);
server.use("/project", projectRoutes);

module.exports = server;
