const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "*"
}));
app.use(express.json({ limit: "2mb" }));

app.get("/", (_req, res) => {
  res.json({
    project: "JeevRaksha",
    version: "4.1.0",
    service: "Backend API",
    status: "running"
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    project: "JeevRaksha",
    version: "4.1.0",
    timestamp: new Date().toISOString()
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
});

module.exports = app;
