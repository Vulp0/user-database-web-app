const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//this could be used on the sign in page to see if an account exists already
/* Request example: (will return 1 if email exists in record, 0 if not)
    {
        "Email": "dongreen@fakemail.com"
    }
*/

router.get("/", async (req, res) => {
    const data = req.body;
    const amount = await Users.count({
        where: {
            Email: data.Email
        }
    });

    res.json(amount);
});

module.exports = router;