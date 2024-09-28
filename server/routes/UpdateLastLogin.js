const express = require("express");
const router = express.Router();
const { Users } = require("../models");

// this request should be made right after user logs in and gets authorized, and also when user logs out of their account
// example request: takes in UserID, and updates its LastLogin date
/*
    {
        UserID: 4
    }
*/
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