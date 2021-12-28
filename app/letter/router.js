const express = require("express");
const router = express.Router();
const { addData,updateStatus } = require("./model");
const { sendData } = require("../../services/email");
const moment = require("moment");

router.get("/", (req, res) => {
  res.render("letter/index");
});
 

router.post("/", async (req, res) => {
  const body = req.body;
  const today = moment().format("MM-DD-Y");
  const date = moment(body.date ?? Date.now()).format("MM-DD-Y");
  const data = await addData(body);
  if (data) {
    if (body.date != null && body.date != undefined) {
        if(today === date){
            await sendData(data);
            await updateStatus(data._id);
        }
    }
    res.redirect("/letter");
  } else {
    res.redirect("/letter");
  } 
});

module.exports = router;
