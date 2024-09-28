const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
app.use(express.json());
app.use(cors());


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

const loginRouter = require("./routes/AuthenticateLogin");
app.use("/authenticatelogin", loginRouter);

const userUnlockerRouter = require("./routes/UserUnlocker");
app.use("/userunlocker", userUnlockerRouter);

const userRemoverRouter = require("./routes/UserRemover");
app.use("/userremover", userRemoverRouter);

const port = 3001;
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server has now started on port " + port + ".");   
    })
});
