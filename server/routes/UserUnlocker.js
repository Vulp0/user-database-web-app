const express = require("express");
const router = express.Router();
const { Users } = require("../models");

/*  Expected request:
    {
        "UserID": [1, 2, 3, ...],    // accepts either a number or array of numbers
        "ShouldBlock": true          // if true: block user, if false: unblock user
    }
*/

router.post("/", async (req, res) => {
    let data = req.body;
    let givenUserID = data.UserID;
    let shouldBlock = data.ShouldBlock;

    if(shouldBlock) {
        await Users.update(
            { IsBlocked: true },
            {
                where: {
                    UserID: givenUserID
                }
            }
        );
    } else {
        await Users.update(
            { IsBlocked: false },
            {
                where: {
                    UserID: givenUserID
                }
            }
        );
    }
    
    res.json();
});

module.exports = router;