module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        email: DataType.STRING,
        password: DataType.STRING,
        name: DataType.STRING,
        lastname: DataType.STRING,
        status: DataType.STRING
    })

    return User
}