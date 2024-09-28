const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//used when logging in, checks if given name and email appear in a single record
/* Request example: (will return 1 if user exists with given name and email, 0 if not)
    {
        "Email": "dongreen@fakemail.com",
        "Name": "Donald Green"
    }
*/

router.post("/", async (req, res) => {
    let data = req.body;
    const doesUserExist = await Users.findOne({
        where: {
            Email: data.Email,
            Name: data.Name
        }
    });

    data = {...data, authStatus: doesUserExist ? true : false};
    res.json(data);
});

module.exports = router;