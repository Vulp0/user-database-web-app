const express = require("express");
const router = express.Router();
const { Users } = require("../models");

/*  Expected request:
    {
        UserID: [1, 2, 3, ...]      // expects a number or an array of numbers
    }
*/

router.post("/", async (req, res) => {
    let data = req.body;
    let givenUserID = data.UserID;

    await Users.destroy({
        where: {
            UserID: givenUserID
        }
    });

    res.json();
});

module.exports = router;