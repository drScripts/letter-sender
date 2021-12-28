var express = require("express");
var router = express.Router();
const { findById } = require("../app/letter/model");
const moment = require("moment")

/* GET home page. */
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const data = await findById(id);
  const created = moment(data.createdAt).format("DD, MMMM YYYY")
  console.log(data,created);
  res.render("index", { data: data,created });
});

module.exports = router;
