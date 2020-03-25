const express = require("express");

const lipsumRoute = require("./lipsum");
const titleRoute = require("./title");

const router = express.Router();

module.exports = () => {
  router.get("/", (request, response, next) => {
    try {
      response.render("pages/index", { pageTitle: "Welcome" });
    } catch (err) {
      return next(err);
    }
  });

  router.use("/lipsum", lipsumRoute());
  router.use("/title", titleRoute());

  return router;
};
