const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//takes in UserID, and updates its LastLogin date
router.post("/", async (req, res) => {
    const givenID = req.body.UserID;
    await Users.update(
        { LastLogin: new Date() },
        {
            where: {
                UserID: givenID
            }
        }
    );

    res.json(givenID);
});

module.exports = router;