const express = require("express");
const router = express.Router();
const { Users } = require("../models");

/* Request example:
    nothing lol
*/

router.get("/", async (req, res) => {
    const userList = await Users.findAll();
    res.json(userList);
});

module.exports = router;