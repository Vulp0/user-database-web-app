module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        UserID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING
        },
        Position: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        },
        LastLogin: {
            type: DataTypes.DATE
        },
        JoinDate: {
            type: DataTypes.DATE
        },
        IsBlocked: {
            type: DataTypes.BOOLEAN
        }
    });

    return Users;
}