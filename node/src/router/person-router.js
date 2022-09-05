const express = require("express");
const router = express.Router();
const personService = require("../services/person-service");

router.get("/", async (request, response, next) => {
  try {
    const { name } = request.query;
    if (name) {
      await personService.insert(name);
    } else {
      await personService.insert();
    }

    const peopleList = await personService.getAllNames();

    response.render("index", {
      title: "",
      sectionHeading: "Full Cycle Rocks!",
      peopleList,
    });
  } catch (error) {
    console.error(`> [error] ${error.message}`);
    next(error);
  }
});

module.exports = router;
