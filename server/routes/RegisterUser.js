const express = require("express");
const router = express.Router();
const { Users } = require("../models");

/* Request example:
    {
        "Name": "John Doe",
        "Position": "CTO",              // Optional, sign in form shouldn't stop you from creating an account without a position
        "Email": "jdoe@fakemail.com"
    }
*/

router.post("/", async (req, res) => {
    let data = req.body;
    let missingProps = {
        LastLogin: new Date(),
        JoinDate: new Date(),
        IsBlocked: false
    };
    data = {...data, ...missingProps};
    await Users.create(data);
    res.json(data);
});

module.exports = router;