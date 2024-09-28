const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//this could be used on the sign in page to see if an account exists already
/* Request example: (will return 1 if email exists in record, 0 if not)
    {
        "Email": "dongreen@fakemail.com"
    }
*/

router.post("/", async (req, res) => {
    const givenEmail = req.body.Email;
    const amount = await Users.count({
        where: {
            Email: givenEmail
        }
    });
    res.json(amount);
});

module.exports = router;