const express = require("express");
const app = express();
const db = require("./models");
app.use(express.json());

const registerUserRouter = require("./routes/RegisterUser");
app.use("/registeruser", registerUserRouter);

const getAllUsersRouter = require("./routes/GetAllUsers");
app.use("/allusers", getAllUsersRouter);

const editRecordRouter = require("./routes/EditRecord");
app.use("/editrecord", editRecordRouter);

const userExistRouter = require("./routes/DoesUserExist");
app.use("/userexist", userExistRouter);

const updateLogin = require("./routes/UpdateLastLogin");
app.use("/updatelogin", updateLogin);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server has now started on port 3001.");   
    })
});
