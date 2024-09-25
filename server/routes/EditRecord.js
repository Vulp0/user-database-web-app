const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//frontend should let you edit a record by clicking on it in the table
//and also check so you can only update a record if you give different data
/* Request example:
    {
        "UserID": 4
        "Name": "John Doe",
        "Position": "CTO",
        "Email": "jdoe@fakemail.com"
    }
*/

router.post("/", async (req, res) => {
    let data = req.body;
    let givenId = data.UserID;
    delete data.UserID;

    Users.update(
        data,
        {
            where: {
                UserID: givenId
            }
        }
    );

    res.json(data);
});

module.exports = router;